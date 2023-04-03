d3.csv("energy_sources.csv").then(function (data) {
  console.log(data);
  //To keep warming to 1.5 degrees, countries must cut emissions by at least 45 per cent compared to 2010 levels.
//2010 levels of net emmissions
// country2010=[]
// for (var i = 0; i < data.length; i++) {
//   let x = data;
//   if (x.Year[i] ==2010) {
//     country2010.push(x.Coutry);
//   };

function year2010(x){
  return x.Year==2010};
function year2015(x){
    return x.Year==2015};
function year2020(x){
      return x.Year==2020};

var data2010=data.filter(year2010);
console.log("data2010");
console.log(data2010);

var data2015=data.filter(year2015);

var data2020=data.filter(year2020);

  console.log(data2010);
  console.log(data2015);
  console.log(data2020);

let country = data2010.map(function (x) {
      return x.Country;
  });
  console.log(country);
let emissions2010=data2010.map(function (x) {
  return x.CO2_emissions;
});
  console.log(emissions2010);
  let emissionsgoal=data2010.map(function (x) {
    return x.CO2_emissions*.55;
  });
    console.log(emissionsgoal);
    let emissions2020=data2020.map(function (x) {
      return x.CO2_emissions;
    });
      console.log(emissions2020);

      let emissionSort=data2010.sort((a,b)=>b.CO2_emissions-a.CO2_emissions);
      var emissionSortSliced=emissionSort.slice(0,10);
      console.log("emissionSortSliced");
      console.log(emissionSortSliced);

      let emissionSort2020=data2020.sort((a,b)=>b.CO2_emissions-a.CO2_emissions);
      var emissionSortSliced2020=emissionSort2020.slice(0,10);
      let emissionsGoalTop10=emissionSortSliced.map(function (x) {
        return x.CO2_emissions*.55;
      });
      let emissionsTop2020=emissionSortSliced2020.map(function (x) {
        return x.CO2_emissions;
      });
      let emissionsTop2010=emissionSortSliced.map(function (x) {
        return x.CO2_emissions;
      });
      let countryTop10 = emissionSortSliced.map(function (x) {
        return x.Country;
    });

      const xValues2 = [100,200,300,400,500,600,700,800,900,1000];

      const mixedChart = new Chart ("myChart", {
        type: "line",
        data: {
          labels: countryTop10,
          datasets: [{
            type: 'line',
            label: 'CO2 Emissions Goal for 2030',
            data: emissionsGoalTop10,
            backgroundColor: "red",
            // fill: false
          },{
            type: 'bar',
            label: 'CO2 Emissions 2010',
            data: emissionsTop2010,
            backgroundColor: "green",
            // fill: false
          },{
            type: 'bar',
            label: 'CO2 Emissions 2020',
            data: emissionsTop2020,
            backgroundColor: "blue",
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