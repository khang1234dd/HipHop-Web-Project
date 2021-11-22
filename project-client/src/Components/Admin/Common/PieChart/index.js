import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
    var options = {
        series: [44, 55, 13, 43, 22],
        chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            show: true,
            fontSize: 13,
            position: 'top',
            horizontalAlign: 'center',
            markers: {
              radius: 12
            },
            floating: true, 
            fontWeight: 500,
            itemMargin: { horizontal: 12 },
            },
        }
      }]
      };
    return (
        <ReactApexChart options={options} series={options.series}  type={options.chart.type} width={options.chart.width} height={280}/>
    )
}

export default PieChart
