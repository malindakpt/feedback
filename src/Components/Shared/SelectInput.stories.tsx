import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectInput, { SelectInputProps } from './SelectInput';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    options: { control: 'object' }, // Allow changing options dynamically in Storybook
    onChange: { action: 'changed' }, // Logs the onChange event
  },
} as Meta;

const Template: StoryFn<SelectInputProps> = (args) => {
  const [value, setValue] = useState(''); // Local state to manage selected value

  return (
    <SelectInput
      {...args}
      value={value}
      onChange={setValue} // Updates local state with selected value
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select an Option',
  error: false,
  required: false,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Select an Option',
  error: true,
  required: true,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};

export const Required = Template.bind({});
Required.args = {
  label: 'Select an Option',
  required: true,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};
