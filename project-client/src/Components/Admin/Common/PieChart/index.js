import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChart = ({...STATISTIC}) => {
    var options = {
        series: [STATISTIC.users, STATISTIC.videomusic, STATISTIC.post, STATISTIC.song],
        chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['User', 'Video Music', 'Post', 'Song'],
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
