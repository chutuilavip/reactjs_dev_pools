import React from 'react';
import BarChart from '../../components/Chart/BarChart/BarChart';
import LineChart from '../../components/Chart/LineChart/LineChart';
import { StatisticWrapper } from './styled';
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
export default function Statistics() {
  return (
    <StatisticWrapper>
      <div className="wrapper-middle-chart">
        {/* <Line data={middleChartData} options={OptionsChart.Top} className="" /> */}
        {/* <BarChart /> */}
        <LineChart />
      </div>
    </StatisticWrapper>
  );
}
