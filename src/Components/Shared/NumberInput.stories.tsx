import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NumberInput, { NumberInputProps } from './NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<NumberInputProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <NumberInput
      {...args}
      value={value}
      onChange={setValue} // Updates local state with input value
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Enter Number',
  error: false,
  required: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Enter Number',
  error: true,
  required: true,
};
