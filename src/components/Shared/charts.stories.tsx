// Charts.stories.tsx
import React from 'react';
import Charts, { ChartProps } from './charts'; // Adjust the import path as needed
import { ChartData } from 'chart.js';

// Default chart data examples for different chart types
const barChartData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [50, 60, 70, 80, 90],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const lineChartData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [100, 200, 300, 400, 500],
      borderColor: 'rgba(54, 162, 235, 0.6)',
      fill: false,
    },
  ],
};

const pieChartData: ChartData<'pie'> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Color Distribution',
      data: [300, 50, 100],
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
    },
  ],
};

// Default options
const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Default Title',
    },
  },
};

export default {
  title: 'Components/Charts',
  component: Charts,
  argTypes: {
    // Control for chart type
    data: {
      control: { type: 'object' }, // Chart.js data object
    },
    chartType: {
      control: {
        type: 'select',
        options: ['bar', 'line', 'pie'], // Supported chart types
      },
      defaultValue: 'bar',
    },
    options: {
      control: { type: 'object' }, // Allows for changing the options dynamically
      defaultValue: defaultOptions, // Set default chart options
    },
  },
};

// Template with proper typing for args
const Template = (args: ChartProps) => <Charts {...args} />;

// Stories with full control over props
export const BarChart = Template.bind({}) as typeof Template & { args?: ChartProps };
BarChart.args = {
  data: { ...barChartData, chartType: 'bar' },
  options: defaultOptions,
};

export const LineChart = Template.bind({}) as typeof Template & { args?: ChartProps };
LineChart.args = {
  data: { ...lineChartData, chartType: 'line' },
  options: {
    ...defaultOptions,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart Example',
      },
    },
  },
};

export const PieChart = Template.bind({}) as typeof Template & { args?: ChartProps };
PieChart.args = {
  data: { ...pieChartData, chartType: 'pie' },
  options: {
    ...defaultOptions,
    plugins: {
      title: {
        display: true,
        text: 'Pie Chart Example',
      },
    },
  },
};
