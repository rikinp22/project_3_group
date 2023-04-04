d3.csv("energy_by_year.csv").then(function(data) {
    console.log(data);
});
    const data = {
      labels: ['2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        label: 'Total Energy Production',
        data: [10732.1164484, 11037.303116508, 11434.967154545, 11673.86400701, 11317.59658309],
        borderColor: '#ffcf00',
        backgroundColor: '#ffea00',
        borderWidth: 1
      },
      {
        label: 'Total Energy Consumption',
        data: [11411.43482753, 11613.48414005, 11893.83076988, 11972.74665754, 11529.41721448],
        borderColor: '#ff7600',
        backgroundColor: '#ff7e00',
        borderWidth: 1
      },
      {
        label: 'Electricity Production',
        data: [21984.346999999998, 22553.281637, 23436.043403, 23685.45432688, 23560.15429626],
        borderColor: '#14e000',
        backgroundColor: '#00b558',
        borderWidth: 1
      },
      {
        label: 'Electricity Consumption',
        data: [19057.702627079998, 19593.697831960002, 20409.30904546, 20631.05198148, 20416.11330995],
        borderColor: '#0d25bf',
        backgroundColor: '#0052bd',
        borderWidth: 1
      }]
    };

    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );