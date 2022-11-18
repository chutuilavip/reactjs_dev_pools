import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';
import { TestChartWrapper } from './styled';
import { lineChartOption } from './Options';

export default function LineChart({ label, data }) {
  const middleChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Viewed',
        data: [1, 120, 30, 10, 200, 6],
        backgroundColor: '#ed2a26',
        borderWidth: 2,
        borderColor: '#ed2a26',
        tension: 0.5, // curve of line
        showLine: true, //Show line of line chart,
        spanGaps: false,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: 'white', //color of point,
        pointHoverBackgroundColor: 'white', //color of point,
        pointBorderColor: '#ed2a26', //color of border point
        pointBorderWidth: 2,
        pointHitRadius: 30, //chua hover den tootip da hien
      },
    ],
  };

  return (
    <TestChartWrapper>
      <h1 className="section_title">Ollll</h1>
      <div className="wrapper-middle-chart">
        <Line data={middleChartData} options={lineChartOption} className="" />
      </div>
    </TestChartWrapper>
  );
}
