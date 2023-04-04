// var datasource = "../cleaned_data_lat_long.csv"

// //pull the demographic info pair from metadata base on the sample on init
// d3.csv(datasource).then((data) => {
//         console.log(data)
//     //console.log(data.total_energy_consumption)
//     let total_consumption = data.map(function (x) {
//         return x.total_energy_consumption;


//     } )
//     console.log(total_consumption)
// })

//create list of colorscales (same length as energy_options)
colorscales = ["Blues","Greens", "Blues"]

units = ["Mt", "bcm", "Mt"]
function init(){
//save reference to select html object
let selection = d3.select("#energy-select")
//hard code the from csv
energy_options = [
    "oil_products_consumption",
    "natural_gas_consumption",
    "coal_lignite_consumption"
]

//populate dropdown with csv headers (text, property value)
    energy_options.forEach(option =>{
        selection.append("option").text(option).property("value",option)
    })


// get the iso from the countries json
d3.json("/static/js/countries.json").then(country => {
    getData(country, energy_options[0]);
});



}
function getData(countries,chosen_x) {
    //console.log(countries);

    function filter_and_unpack(rows, key, year) {
        //console.log(rows)
        return rows.filter(d => d.year == year).map(row => row[key])
    }
    d3.csv("/cleaned_data_lat_long.csv").then(rows => {
        //get value of dropdown save a
        //let chosen_x = d3.select("#energy-select").property("value")
        console.log(chosen_x)


        rows.forEach(element => {
            element.year = +element.year;
            element.chosen_x = +element.chosen_x;
            var code = countries.filter(o => o.name == element.country).map(o => o.code)[0];
            element.isoCode = code;
        });

        var frames = []
        var slider_steps = []

        var n = 10;
        var num = 1990;

        for (var i = 0; i <= n; i++) {
            //console.log(rows[0])
            var z = filter_and_unpack(rows, chosen_x, num)
            var country_name = filter_and_unpack(rows, 'country', num)
            //console.log(z)
            //var lat = rows.map(d => [d.latitude, d.longitude]);
            //var locations = filter_and_unpack(rows, 'isoCode', num);
            var locations = rows.filter(d => d.year == num).map(row => row["isoCode"])
            //console.log(locations)
            frames[i] = { data: [{ z: z, locations: locations, text: country_name}], name: num}
            slider_steps.push({
                label: num.toString(),
                method: "animate",
                args: [[num], {
                    mode: "immediate",
                    transition: { duration: 100 },
                    frame: { duration: 100 }
                }
                ]
            })
            num = num + 3
        }
        console.log(frames[0].data[0].locations);
        //get index of chosen_x
        let index = energy_options.indexOf(chosen_x);
        console.log(index);
        let colorscale = colorscales[index];
        let unit = units[index];

        var data = [{
            type: 'choropleth',
            locationmode: 'country',
            locations: frames[0].data[0].locations,
            z: frames[0].data[0].z,
            text: frames[0].data[0].text,
            zauto: true,
            //zmin: 30,
            //zmax: 90
            colorscale: colorscale,
            reversescale: true,
            colorbar: {
                title: unit//'Mtoe'
            },

        }];
        var layout = {
            title: 'World Energy <br>1990 - 2020',
            geo: {
                scope: 'world',
                projection: {
                    type: 'robinson'
                },
                countrycolor: 'rgb(255, 255, 255)',
                showland: true,
                landcolor: 'rgb(217, 217, 217)',
                showlakes: true,
                lakecolor: 'rgb(255, 255, 255)',
                subunitcolor: 'rgb(255, 255, 255)',
                lonaxis: {},
                lataxis: {}
            },
            updatemenus: [{
                x: 0.1,
                y: 0,
                yanchor: "top",
                xanchor: "right",
                showactive: false,
                direction: "left",
                type: "buttons",
                pad: { "t": 87, "r": 10 },
                buttons: [{
                    method: "animate",
                    args: [null, {
                        fromcurrent: true,
                        transition: {
                            duration: 200,
                        },
                        frame: {
                            duration: 500
                        }
                    }],
                    label: "Play"
                }, {
                    method: "animate",
                    args: [
                        [null],
                        {
                            mode: "immediate",
                            transition: {
                                duration: 0
                            },
                            frame: {
                                duration: 0
                            }
                        }
                    ],
                    label: "Pause"
                }]
            }],
            sliders: [{
                active: 0,
                steps: slider_steps,
                x: 0.1,
                len: 0.9,
                xanchor: "left",
                y: 0,
                yanchor: "top",
                pad: { t: 50, b: 10 },
                currentvalue: {
                    visible: true,
                    prefix: "Year:",
                    xanchor: "right",
                    font: {
                        size: 20,
                        color: "#666"
                    }
                },
                transition: {
                    duration: 300,
                    easing: "cubic-in-out"
                }
            }]
        };

        Plotly.newPlot('myDiv', data, layout).then(function () {
            Plotly.addFrames('myDiv', frames);
        });
    });

}
init();
function optionchange(chosen_x){
    d3.json("/static/js/countries.json").then(country => {
        getData(country, chosen_x)});
}
