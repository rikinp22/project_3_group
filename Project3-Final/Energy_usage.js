d3.csv("energy_by_year.csv").then(function(data) {
  console.log(data);
});
  const data = {
    labels: ['1990', '1995', '2000', '2005', '2010','2015', '2020'],
    datasets: [{
      label: 'Total Energy Consumption (kWh)',
      data: [7436.10610109, 7832.71595335, 8483.98537704, 9705.5797745, 10806.15147404, 11361.66804513, 11529.41721448],
      borderColor: '#ff8c00',
      backgroundColor: '#ff8c00',
      borderWidth: 1
    },
    {
      label: 'Electricity Consumption (TWh)',
      data: [8945.84, 10088.005, 11696.005, 13906.2288056, 6423.430560920002, 18482.92026674, 20416.11330995],
      borderColor: "#59981A",
      backgroundColor: "#59981A",
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
  // updated chart name and id for HTML code
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
  );