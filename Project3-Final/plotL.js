function main() {
	var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

	
	// Set and format chart title
    svg.append("text")
       .attr("transform", "translate(250,0)")
       .attr("x", 50)
       .attr("y", 50)
       .attr("font-size", "16px")
       .text("Share of Renewal Electricity Production in 2020 (%)")

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

	// Pull in data and go through it to create the scale for the axes on the graph
    d3.csv("energy2020edit.csv").then(function(data) {
        xScale.domain(data.map(function(d) {return d.country;}));
        yScale.domain([0, d3.max(data, function(d){return d.share_renewables_electricity_production;})]);

		// Set up X Axis Label Details
        g.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(xScale).ticks(10))
			.selectAll("text")
				.style("text-anchor", "end")
				.attr("x", "-.8em")
				.attr("y", ".8em")
				.attr("transform", "rotate(-45)");
		// Set up Y Axis Label Details
        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){return d;}).ticks(10))
	 	.append("text")
	 	.attr("y", 20)
	 	.attr('dy', '40em')
	 	.attr('text-anchor', 'middle')
	 	.attr('stroke', 'black')
	 	//.text('Share of Renewable Electricity (%)')

        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
	// What to do when mouse hovers over bar 
	 .on("mouseover", onMouseOver) 
	// What happens when moust goes away
	 .on("mouseout", onMouseOut)
         .attr("x", function(d) {return xScale(d.country); })
         .attr("y", function(d) {return yScale(d.share_renewables_electricity_production);})
         .attr("width", xScale.bandwidth())
	 // Adds in transition effect - eases in, duration of bar to fill - drop down animation
	 .transition()
	 .ease(d3.easeLinear)
	 .duration(250)
	 .delay(function(d,i){return i * 50})
         .attr("height", function(d) {return height - yScale(d.share_renewables_electricity_production);});
	})
       
	// Create the mouse over action
	function onMouseOver(d, i) {
		d3.select("#tooltip").transition().duration(200).style("opacity", 1).text("Percentage of Shared Renewable Electricity Produced: " +i.share_renewables_electricity_production+"%")
	
		
		d3.select('#tooltip').classed('hidden', false);

		// This will highlight the bar (highlight color added to html file)
		d3.select(this).attr('class','highlight')
		d3.select(this)
			// Animation 
			.transition()
			// 200 is speed it grows 
			.duration(200)
			// This make the bar plumper when you hover over it
			.attr('width', xScale.bandwidth() + 5)
			.attr('y', function(d){return yScale(d.share_renewables_electricity_production) - 10;})
			.attr('height', function(d){return height - yScale(d.share_renewables_electricity_production) + 10;})
	}

	// Create what happens when mouse goes away
	function onMouseOut(d, i){
		// This will remove highlight from the bar 
		d3.select(this).attr('class','bar')
		d3.select(this)
			// Animation
			.transition()
			// Speed bar goes back to normal size
			.duration(200)
			//Back to normal size
			.attr('width', xScale.bandwidth())
			.attr('y', function(d){return yScale(d.share_renewables_electricity_production);})
			.attr('height', function(d) {return height - yScale(d.share_renewables_electricity_production)})
		
		d3.select('#tooltip').classed('hidden', true);
	}
}

// Watched YouTube video tutorial outlining using D3 for interactive charts and edited the text as I went to fit the needs for this chart. Videos were created by "Data Science for Everyone".
