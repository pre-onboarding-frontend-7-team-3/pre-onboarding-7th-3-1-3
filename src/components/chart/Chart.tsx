import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useChartData } from '../../hooks/useChart';

const Chart = () => {
  const { firstData, secondData, x } = useChartData();
  const series = [
    {
      name: firstData.name,
      data: firstData.data,
    },
    {
      name: secondData.name,
      data: secondData.data,
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: x,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Chart;
