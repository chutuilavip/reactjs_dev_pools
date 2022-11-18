export const barChartOption = {
  maintainAspectRatio: false,
  barThickness: 20,
  scales: {
    xAxes: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
  },
  datalabels: {
    display: true,
  },
  responsive: true,
  layouts: {
    padding: 20,
  },
  tooltip: {
    position: 'average',
  },
  plugins: {
    legend: {
      //label of chart
      position: 'bottom',
      display: true, //display label of chart
      labels: {
        color: 'yellow',
      },
    },
    title: {
      display: true,
    },

    subtitle: {
      display: true,
    },
  },
};
