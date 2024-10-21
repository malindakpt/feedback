import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Shared/TextInput', 
  component: TextInput,
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => {
  
  const [value, setValue] = useState<string>(args.value || '');

  return (
    <TextInput
      {...args}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};


export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  value: '',
  required: false,
};


export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'Email',
  value: '',
  required: true,
  validateInput: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Invalid email address';
    return '';
  },
};




