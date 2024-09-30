import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DateInput, { DateInputProps } from '../Shared/DateInput';

export default {
  title: 'Components/DateInput',
  component: DateInput,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<DateInputProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <DateInput
      {...args}
      value={value}
      onChange={setValue} // Updates local state with input value
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Date',
  error: false,
  required: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Select Date',
  error: true,
  required: true,
};
