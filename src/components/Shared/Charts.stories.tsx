import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChartComponent, { ChartProps } from './Charts';
import { ChartType } from '../../Enums/chartTypes.enum';

export default {
  title: 'Components/ChartComponent',
  component: ChartComponent,
} as Meta;

const hardcodedData = [
  { x: '10:00 AM', y: 20 },
  { x: '11:00 AM', y: 30 },
  { x: '12:00 PM', y: 25 },
  { x: '01:00 PM', y: 40 },
  { x: '02:00 PM', y: 35 },
];

const Template: StoryFn<ChartProps> = (args) => <ChartComponent {...args} />;

export const LineChart: StoryFn<ChartProps> = Template.bind({});
LineChart.args = {
  title: 'Rate of Kuliyapitiya Branch - Line Chart',
  data: hardcodedData,
  chartType: ChartType.LINE,
};

// Bar Chart Story
export const BarChart: StoryFn<ChartProps> = Template.bind({});
BarChart.args = {
  title: 'Rate of Kuliyapitiya Branch - Bar Chart',
  data: hardcodedData,
  chartType: ChartType.BAR,
};

// Pie Chart Story
export const PieChart: StoryFn<ChartProps> = Template.bind({});
PieChart.args = {
  title: 'Rate of Kuliyapitiya Branch - Pie Chart',
  data: hardcodedData,
  chartType: ChartType.PIE,
};
