// Load and munge data, then make the visualization.
var fileName = "renewelect.csv";
var energyYears = ["1990", "2000", "2010", "2020"];

d3.csv(fileName, function(error, data) {
    var mappingCountry = {};
    data.forEach(function(d) {
        var country = d.country;
        mappingCountry[country] = [];

        energyYears.forEach(function(field) {
            mappingCountry[country].push(+d[field] );
        });
    });
    barChart(mappingCountry);
});

var barChart = function(mappingCountry) {
    // Define dimensions of vis
    var margin = { top: 30, right: 50, bottom: 30, left: 50 },
        width  = 1000 - margin.left - margin.right,
        height = 500 - margin.top  - margin.bottom;

    // Make x scale
    var xScale = d3.scale.ordinal()
        .domain(energyYears)
        .rangeRoundBands([0, width], 0.1);

    // Make y scale, the domain will be defined on bar update
    var yScale = d3.scale.linear()
        .range([height, 0]);

    // Create canvas
    var canvas = d3.select("#vis-container")
      .append("svg")
        .attr("width",  width  + margin.left + margin.right)
        .attr("height", height + margin.top  + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Make x-axis and add to canvas
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    canvas.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Make y-axis and add to canvas
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var yAxisHandleForUpdate = canvas.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    yAxisHandleForUpdate.append("text")

        .attr("y", 6)
        .attr("dy", "-4em")
        .style("text-anchor", "end")
        .text("Share of Renewable Electricity Production (%)")
        .attr("transform", "rotate(-90)");

    var updateBars = function(data) {
        // First update the y-axis domain to match data
        yScale.domain(d3.extent(data));
        yAxisHandleForUpdate.call(yAxis);

        var bars = canvas.selectAll(".bar").data(data);

        // Add bars for new data
        bars.enter()
          .append("rect")
            .attr("class", "bar")
            .attr("x", function(d,i) { return xScale( energyYears[i] ); })
            .attr("width", xScale.rangeBand())
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });

        // Update old ones, already have x / width from before
        bars
            .transition().duration(500)
            .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return height - yScale(d); });

        // Remove old ones
        bars.exit().remove();
    };

    // Handler for dropdown value change
    var dropdownChange = function() {
        var newCountry = d3.select(this).property('value'),
            newData   = mappingCountry[newCountry];

        updateBars(newData);
    };

    // Get names of countries, for dropdown
    var countries = Object.keys(mappingCountry).sort();

    var dropdown = d3.select("#vis-container")
        .insert("select", "svg")
        .on("change", dropdownChange);

    dropdown.selectAll("option")
            .data(countries)
        .enter().append("option")
            .attr("value", function (d) { return d; })
            .text(function (d) {
                return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
        });

    var initialData = mappingCountry[ countries[0] ];
    updateBars(initialData);
};
// Used a GitHub site from nifemi-sys to help build out chart for drop down menu