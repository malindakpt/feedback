import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Charts, { ChartProps } from './charts';

const meta: Meta<typeof Charts> = {
  title: 'Components/Charts',
  component: Charts,
};
export default meta;

type Story = StoryObj<ChartProps>;

const Template: StoryFn<ChartProps> = (args) => <Charts {...args} />;

export const BarChart: Story = {
  render: Template,
  args: {
    data: {
      chartType: 'bar',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [30, 50, 70, 45, 85, 60, 40],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Monthly Sales',
        },
      },
    },
  },
};

export const LineChart: Story = {
  render: Template,
  args: {
    data: {
      chartType: 'line',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue',
          data: [20, 40, 60, 35, 75, 50, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
      
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Monthly Revenue',
        },
      },
    },
  },
};

export const PieChart: Story = {
  render: Template,
  args: {
    data: {
      labels: ['Product A', 'Product B', 'Product C'],
      datasets: [
        {
          label: 'Market Share',
          data: [55, 25, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
      chartType: 'pie', // Pie chart type
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Market Share Distribution',
        },
      },
    },
  },
};
