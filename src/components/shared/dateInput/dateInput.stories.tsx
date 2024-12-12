import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DateInput, { DateInputProps } from './dateInput';

export default {
  title: 'Shared/DateInput',
  component: DateInput,
} as Meta;

const Template: StoryFn<DateInputProps> = (args) => {
  const [value, setValue] = useState<string>(args.value || '');
  const [error, setError] = useState<string>('');

  const handleChange = (val: string) => {
    setValue(val);

    // Validation logic only when required is true
    if (args.required) {
      if (!val) {
        setError('Date is required');
      } else {
        const today = new Date().toISOString().split('T')[0];
        if (val > today) {
          setError('Date cannot be in the future');
        } else {
          setError(''); // Clear the error when input is valid
        }
      }
    } else {
      // Clear error when validation is not required
      setError('');
    }
  };

  return (
    <div>
      <DateInput
        {...args}
        value={value}
        onChange={handleChange}
        error={!!error} // Convert error string to boolean for the DateInput
      />
      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>} {/* Display error message */}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Date',
  value: '',
  required: false, // No validation applied for this story
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'Select a Date',
  value: '',
  required: true, // Validation enabled for this story
};

// New story for the disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Date Input',
  value: '',
  required: false, // No validation applied for this story
  disabled: true,  // Input is disabled
};
