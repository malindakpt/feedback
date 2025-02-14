import React from 'react';
import ReusableChart, { ChartData } from './charts2';

const ExamplePage: React.FC = () => {
  const lineChartData: ChartData = {
    chartType: 'bar',
    xLabels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40, 50],
        color: '#ff6347',
      },
      {
        label: 'Revenue',
        data: [5, 15, 25, 35, 45],
        color: '#4caf50',
      },
    ],
  };

  const barChartData: ChartData = {
    chartType: 'bar',
    xLabels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Category 1',
        data: [12, 19, 3, 5],
        color: '#3498db',
      },
      {
        label: 'Category 2',
        data: [4, 8, 7, 3],
        color: '#e74c3c',
      },
    ],
  };

  const pieChartData: ChartData = {
    chartType: 'pie',
    xLabels: ['Red', 'Blue', 'Green'],
    datasets: [
      {
        data: [300, 200, 100],
        color: '#f39c12',
      },
    ],
  };

  const scatterChartData: ChartData = {
    chartType: 'scatter',
    xLabels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 4 },
        ],
        color: '#9b59b6',
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chart Examples</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3>Line Chart</h3>
        <ReusableChart data={lineChartData} options={{ title: 'Sales vs Revenue' }} />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Bar Chart</h3>
        <ReusableChart data={barChartData} options={{ title: 'Category Comparison' }} />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Pie Chart</h3>
        <ReusableChart data={pieChartData} options={{ title: 'Color Distribution' }} />
      </div>

      <div>
        <h3>Scatter Chart</h3>
        <ReusableChart data={scatterChartData} options={{ title: 'Scatter Plot Example' }} />
      </div>
    </div>
  );
};

export default ExamplePage;
