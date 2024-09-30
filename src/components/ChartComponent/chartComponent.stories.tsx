import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Use Meta and StoryFn
import ChartComponent, { ChartProps } from './chartComponent'; // Adjust the import path as needed

export default {
  title: 'Components/ChartComponent',
  component: ChartComponent,
} as Meta<typeof ChartComponent>; // Use Meta type here

const Template: StoryFn<ChartProps> = (args) => <ChartComponent {...args} />; // Use StoryFn type here

export const ExampleChart = Template.bind({});
ExampleChart.args = {
  title: 'Example Chart',
  data: [
    { x: 1, y: 100 },
    { x: 2, y: 200 },
    { x: 3, y: 300 },
    { x: 4, y: 400 },
    { x: 5, y: 500 },
  ],
};
