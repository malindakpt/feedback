import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Chart2, { ChartProps, ChartType } from './charts2'; // Adjust the path as necessary.

export default {
  title: 'Components/Chart2',
  component: Chart2,
  argTypes: {
    'data.chartType': {
      control: 'select',
      options: ['line', 'bar', 'pie', 'scatter'], // The available chart types.
    },
    options: {
      control: 'object',
    },
  },
} as Meta<typeof Chart2>;

const Template: StoryFn<ChartProps> = (args) => <Chart2 {...args} />;

// Example datasets
const lineChartData = {
  chartType: 'line' as ChartType,
  xLabels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    { label: 'Sales', data: [100, 200, 150, 250], color: 'blue' },
    { label: 'Revenue', data: [90, 180, 120, 220], color: 'green' },
  ],
};

const barChartData = {
  chartType: 'bar' as ChartType,
  xLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    { label: 'Profit', data: [300, 500, 400, 600], color: 'purple' },
  ],
};

const pieChartData = {
  chartType: 'pie' as ChartType,
  xLabels: ['Apples', 'Oranges', 'Bananas', 'Grapes'],
  datasets: [
    { data: [30, 20, 25, 25], color: 'red' },
  ],
};

const scatterChartData = {
  chartType: 'scatter' as ChartType,
  xLabels: [],
  datasets: [
    {
      label: 'Data Points',
      data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 15 },
        { x: 4, y: 25 },
      ],
      color: 'orange',
    },
  ],
};

// Stories for different chart types
export const LineChart = Template.bind({});
LineChart.args = {
  data: lineChartData,
  options: {
    title: 'Line Chart Example',
    height: 400,
    width: '100%',
    showLegend: true,
    showGrid: true,
  },
};

export const BarChart = Template.bind({});
BarChart.args = {
  data: barChartData,
  options: {
    title: 'Bar Chart Example',
    height: 400,
    width: '100%',
    showLegend: true,
    showGrid: true,
  },
};

export const PieChart = Template.bind({});
PieChart.args = {
  data: pieChartData,
  options: {
    title: 'Pie Chart Example',
    height: 400,
    width: '100%',
    showLegend: true,
    showGrid: false,
  },
};

export const ScatterChart = Template.bind({});
ScatterChart.args = {
  data: scatterChartData,
  options: {
    title: 'Scatter Chart Example',
    height: 400,
    width: '100%',
    showLegend: true,
    showGrid: true,
  },
};
