import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    value: { control: false }, // value will be managed locally by the story
    onChange: { action: 'changed' }, // action logs the event in the Storybook UI
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args: TextInputProps) => {
  const [value, setValue] = useState(''); // Local state to manage the value

  return (
    <TextInput
      {...args}
      value={value}
      onChange={setValue} // Updates local state with input value
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  error: false,
  required: false,
};

// Error state story
export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Name',
  error: true,
  required: true,
};

// Required field story
export const RequiredField = Template.bind({});
RequiredField.args = {
  label: 'Email',
  required: true,
};
