import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in April, 2022',
        align: 'left'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Chrome', y: 73.24 },
          { name: 'Edge', y: 12.93 },
          { name: 'Firefox', y: 4.73 },
          { name: 'Safari', y: 2.50 },
          { name: 'Internet Explorer', y: 1.65 },
          { name: 'Other', y: 4.93 }
        ]
      }]
};

function GradientPieChart()  {

    return (
        <HighchartsReact
       highcharts={Highcharts}
       options={options}
     />
     );
    }
 export default GradientPieChart;

