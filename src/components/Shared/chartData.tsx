// chartData.tsx
export const barChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 60, 70, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  export const lineChartData = {
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
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
      },
    ],
  };
  