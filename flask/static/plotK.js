d3.csv("static/energy_sources.csv").then(function (data) {
  console.log(data);
  //To keep warming to 1.5 degrees, countries must cut emissions by at least 45 per cent compared to 2010 levels.
  //2010 levels of net emmissions
  // country2010=[]
  // for (var i = 0; i < data.length; i++) {
  //   let x = data;
  //   if (x.Year[i] ==2010) {
  //     country2010.push(x.Coutry);
  //   };

  function year2010(x) {
    return x.Year == 2010
  };
  function year2015(x) {
    return x.Year == 2015
  };
  function year2020(x) {
    return x.Year == 2020
  };

  var data2010 = data.filter(year2010);
  console.log("data2010");
  console.log(data2010);

  var data2015 = data.filter(year2015);

  var data2020 = data.filter(year2020);

  console.log(data2010);
  console.log(data2015);
  console.log(data2020);

  let country = data2010.map(function (x) {
    return x.Country;
  });
  var country2 = []

   for (let i = 0; i < country.length; i++) {
    country2.push(0);
    country2.push(country[i]);
    country2.push(0);
   };
   console.log("country2");
   console.log(country2);
  //   // Variable to hold current movie in loop

  //   let sample = samples[i];
  //   // console.log(sample);
  //   // console.log(samples);
  //   //how to sort???
  //   let samplesort = samples.sort((a, b) => b.sample_values - a.sample_values);
  //   // console.log(samplesort);
  // console.log(country);
  let emissions2010 = data2010.map(function (x) {
    return x.CO2_emissions;
  });
  console.log(emissions2010);
  let emissionsgoal = data2010.map(function (x) {
    return x.CO2_emissions * .55;
  });
  console.log(emissionsgoal);
  let emissions2020 = data2020.map(function (x) {
    return x.CO2_emissions;
  });
  console.log(emissions2020);

  let emissionSort = data2010.sort((a, b) => b.CO2_emissions - a.CO2_emissions);
  var emissionSortSliced = emissionSort.slice(0, 10);
  console.log("emissionSortSliced");
  console.log(emissionSortSliced);

  let emissionSort2020 = data2020.sort((a, b) => b.CO2_emissions - a.CO2_emissions);
  var emissionSortSliced2020 = emissionSort2020.slice(0, 10);
  let emissionsGoalTop10 = emissionSortSliced.map(function (x) {
    return x.CO2_emissions * .55;
  });
  let emissionsTop2020 = emissionSortSliced2020.map(function (x) {
    return x.CO2_emissions;
  });
  let emissionsTop2010 = emissionSortSliced.map(function (x) {
    return x.CO2_emissions;
  });
  let countryTop10 = emissionSortSliced.map(function (x) {
    return x.Country;
  });
//to help center graph, added essential blank data on both ends
  var country2 = []
 country2.push("");
   for (let i = 0; i < countryTop10.length; i++) {
    country2.push(countryTop10[i]);
   };
   country2.push("");
   console.log("country2");
   console.log(country2);
   console.log(emissionsTop2020);
   var emissionsTop2020Ver2 = []
   emissionsTop2020Ver2.push(0);
   for (let i = 0; i < emissionsTop2020.length; i++) {
    emissionsTop2020Ver2.push(emissionsTop2020[i]);
   };
   emissionsTop2020Ver2.push(0);
   console.log("emissionsTop2020Ver2");
   console.log(emissionsTop2020Ver2);

   var emissionsTop2010Ver2 = []
   emissionsTop2010Ver2.push(0);
     for (let i = 0; i < emissionsTop2010.length; i++) {
      emissionsTop2010Ver2.push(emissionsTop2010[i]);
     };
     emissionsTop2010Ver2.push(0);
     console.log("emissionsTop2010Ver2");
     console.log(emissionsTop2010Ver2);

     var emissionsGoalTop10Ver2 = []
     emissionsGoalTop10Ver2.push(0);
     for (let i = 0; i < emissionsGoalTop10.length; i++) {
      emissionsGoalTop10Ver2.push(emissionsGoalTop10[i]);
     };
     emissionsGoalTop10Ver2.push(0);
     
    // Updated code to go to mhChart2 for HTML
  const mixedChart = new Chart("myChart2", {
    type: "line",
    options: {
          title: {
              display: true,
              text: 'Progress Towards Paris Agreement for Top 10 CO2 Producing Counties'
          }
  },
    data: {
      labels: country2,
      datasets: [{
        type: 'line',
        label: 'CO2 Emissions Goal for 2030 (MtCO2)',
        data: emissionsGoalTop10Ver2,
        backgroundColor: "#483d8B",
        // fill: false



      },
      {
        type: 'bar',
        label: 'CO2 Emissions 2010 (MtCO2)',
        data: emissionsTop2010Ver2,
        options: {
          scales: {
            xAxes: [{
              ticks: {
                max: Math.max.apply(null, emissionsTop2010) + 1, //max value + 1
                min: Math.max.apply(null, emissionsTop2020) - 1,
              }
            }]
          },
          //options: {
          scales: {
            xAxes: [{
              offset: true
            }],
            x: {
              beginAtZero: -1
            }
          },
          layout: {
            padding: {
              left: 400,
              right: 400,
              top: 0,
              bottom: 0,
            }
          }
        },


        // options: {
        //   layout: {
        //       padding: 20
        //   },
        backgroundColor: "#86b049",
        // fill: false

      },
      {
        type: 'bar',
        label: 'CO2 Emissions 2020 (MtCO2)',
        data: emissionsTop2020Ver2,
        options: {
          scales: {
            xAxes: [{
              ticks: {
                max: Math.max.apply(null, emissionsTop2020) + 1, //max value + 1
                min: Math.max.apply(null, emissionsTop2020) - 1,
              }
            }]
          },
          //options: {
          scales: {
            xAxes: [{
              offset: true
            }],
            x: {
              beginAtZero: -1
            }
          },
          layout: {
            padding: {
              left: 400,
              right: 400,
              top: 0,
              bottom: 0,
            }
          }
        },
          // options: {
          //   layout: {
          //       padding: 20
          //   },
          backgroundColor: "darkgreen",
          // fill: false
        }],
    },

  });
  // const xValues = [50,60,70,80,90,100,110,120,130,140,150];
  // const yValues = [7,8,8,9,9,9,10,11,14,14,15];

  // new Chart("myChart", {
  //   type: "line",
  //   data: {
  //     labels: xValues,
  //     datasets: [{
  //       fill: false,
  //       lineTension: 0,
  //       backgroundColor: "rgba(0,0,255,1.0)",
  //       borderColor: "rgba(0,0,255,0.1)",
  //       data: yValues
  //     }]
  //   },
  //   options: {
  //     legend: {display: false},
  //     scales: {
  //       yAxes: [{ticks: {min: 6, max:16}}],
  //     }
  //   }
  // });

  // new Chart("myChart", {
  //   data: {
  //       labels: ['January', 'February', 'March', 'April'],
  //       datasets: [{
  //           type: 'bar',
  //           label: 'Bar Dataset',
  //           data: [10, 20, 30, 40]
  //       }, {
  //           type: 'line',
  //           label: 'Line Dataset',
  //           data: [50, 50, 50, 50],
  //       }],

  //   },
  //   options: {
  //     legend: {display: false},
  //   }
  // });

  // const xValues2 = [100,200,300,400,500,600,700,800,900,1000];

  // const mixedChart = new Chart ("myChart", {
  //   type: "line",
  //   data: {
  //     labels: xValues2,
  //     datasets: [{
  //       type: 'line',
  //       label: 'Bar Dataset',
  //       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
  //       backgroundColor: "red",
  //       // fill: false
  //     },{
  //       type: 'bar',
  //       label: 'Bar Dataset',
  //       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
  //       backgroundColor: "green",
  //       // fill: false
  //     },{
  //       type: 'bar',
  //       label: 'Bar Dataset',
  //       data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
  //       backgroundColor: "blue",
  //       // fill: false
  //     }],
  //   },
  // options: {
  //   legend: {display: false}
  //}
});