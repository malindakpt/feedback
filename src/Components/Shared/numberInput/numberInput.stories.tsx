// NumberInput.stories.tsx
import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react'; // Use `Story` and `Meta` from Storybook
import NumberInput, { NumberInputProps } from './numberInput'; // Import the component and props

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
} as Meta<typeof NumberInput>;

// Create a template and explicitly type `args` based on `NumberInputProps`
const Template: StoryFn<NumberInputProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <NumberInput {...args} value={value} onChange={setValue} />;
};

// Default story for the NumberInput component
export const Default = Template.bind({});
Default.args = {
  label: 'Enter a number',
  value: '',
  required: false,
  error: false,
};

// Error state story
export const WithError = Template.bind({});
WithError.args = {
  label: 'Enter a number',
  value: '',
  required: false,
  error: true,
};

// Required field story
export const RequiredField = Template.bind({});
RequiredField.args = {
  label: 'Enter a number',
  value: '',
  required: true,
  error: false,
};
