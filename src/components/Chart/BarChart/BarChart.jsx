import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';
import { barChartOption } from './Options';
import { BarChartWrapper } from './styled';

export default function BarChart({ label, data }) {
  const middleChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Viewed',
        data: [1, 120, 30, 10, 200, 6],
        backgroundColor: '#ed2a26',
        spanGaps: false,
        barThickness: 120,
      },
    ],
  };

  return (
    <BarChartWrapper>
      <h1 className="section_title">bar</h1>
      <div className="wrapper-middle-chart">
        <Bar data={middleChartData} options={barChartOption} className="" />
      </div>
    </BarChartWrapper>
  );
}
