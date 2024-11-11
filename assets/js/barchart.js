var options = {
    series: [{
    name: 'No of Deposits',
    data: [440, 550, 770, 450, 610, 580, 930, 1200, 1500]
  }, {
    name: 'Total Maturity Amount',
    data: [760, 850, 1010, 980, 870, 1050, 910, 1140, 1700]
  }],
    chart: {
    type: 'bar',
    height: 280,
    toolbar: {
        show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      endingShape: 'rounded'
    },
  },
  colors: ['#EEA73B', '#002B77'], 
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    },
    labels: {
        formatter: function (val) {
            if (val >= 1000) {
                return `$${(val / 1000).toFixed(1)}k`;
            } else {
                return `$${val}`;
            }
        }
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#barchart"), options);
  chart.render();