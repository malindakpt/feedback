import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AutoCompleteInput, { AutoCompleteInputProps } from './autoCompleteInput';

export default {
  title: 'Shared/AutoCompleteInput', 
  component: AutoCompleteInput,      
} as Meta;


const Template: StoryFn<AutoCompleteInputProps> = (args) => {
  const [value, setValue] = useState<string>(args.value || '');

  return (
    <AutoCompleteInput
      {...args}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  label: 'Select an Option',
  value: '',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  required: false,
  disabled: false,
};

// Story with Disabled Input
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Autocomplete',
  value: '',
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};



// Story with Validation
export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'With Validation',
  value: '',
  options: ['Valid1', 'Valid2', 'Valid3'],
  validateInput: (value: string) => {
    if (!value) return 'This field is required';
    if (!['Valid1', 'Valid2', 'Valid3'].includes(value))
      return 'Invalid option';
    return '';
  },
};
