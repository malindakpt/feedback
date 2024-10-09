import React, { useEffect } from 'react'; // Import React and useEffect
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface ChartsProps {
  chartType: 'line' | 'bar' | 'pie'; // Accept chart type as a prop
}

const Charts: React.FC<ChartsProps> = ({ chartType }) => {
  let chartInstance: Chart<'line' | 'bar' | 'pie'> | null = null; // Specify the union type for Chart

  useEffect(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (ctx) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: chartType, // Use the chartType prop
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: chartType === 'pie' ? [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ] : ['rgba(75, 192, 192, 0.2)'], // Different colors for pie chart
            borderColor: chartType === 'pie' ? [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ] : ['rgba(75, 192, 192, 1)'], // Different colors for pie chart
            fill: chartType !== 'pie' // Only fill for non-pie charts
          }]
        },
        options: {
          scales: chartType !== 'pie' ? {
            y: {
              beginAtZero: true
            }
          } : undefined // No scales for pie chart
        }
      });
    } else {
      console.error('Canvas element not found');
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartType]); // Include chartType in the dependency array

  return (
    <div>
      <canvas id="myChart" />
    </div>
  );
};

export default Charts;
