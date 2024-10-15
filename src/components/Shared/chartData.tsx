export const barChartData = {
  chartType: 'bar',
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [50, 60, 70, 180],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  },
};


export const lineChartData = {
  chartType: 'line',
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81],
      borderColor: 'rgba(153, 102, 255, 0.6)',
      fill: false,
    },
  ],
};

export const pieChartData = {
  chartType: 'pie',
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [300, 50, 100, 150],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

export const chartData3 = {
  chartType: 'line',
  labels: ['Ja', 'Fe', 'Ma', 'Ap'],
  datasets: [
    {
      label: 'Revenue',
      data: [60, 70, 80, 90],
      borderColor: 'rgba(153, 102, 255, 0.6)',
      fill: false,
    },
  ],
};
