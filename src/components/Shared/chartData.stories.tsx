import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ParentComponent from './chartData'; // Adjust the import path as needed

export default {
  title: 'Components/ParentComponent',
  component: ParentComponent,
} as Meta<typeof ParentComponent>;

const Template: StoryFn = (args) => <ParentComponent {...args} />;

export const DefaultParent = Template.bind({});
DefaultParent.args = {
  title: 'Sample Chart', // Provide a valid title
  data: [ // Provide initial data
    { x: 1, y: 100 },
    { x: 2, y: 200 },
    { x: 3, y: 300 },
    { x: 4, y: 400 },
    { x: 5, y: 500 },
  ],
};
