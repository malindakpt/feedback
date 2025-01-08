import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Formik } from 'formik';
import AutoCompleteInput, { AutoCompleteInputProps } from './autoCompleteInput';

export default {
  title: 'Shared/AutoCompleteInput',
  component: AutoCompleteInput,
} as Meta;

const Template: StoryFn<AutoCompleteInputProps> = (args) => (
  <Formik initialValues={{ [args.name]: '' }} onSubmit={() => {}}>
    <AutoCompleteInput {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Select an Option',
  name: 'defaultAutocomplete',
  options: [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ],
  required: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Autocomplete',
  name: 'disabledAutocomplete',
  options: [{ id: '1', label: 'Option 1' }],
  disabled: true,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'With Validation',
  name: 'validationAutocomplete',
  options: [
    { id: '1', label: 'Valid1' },
    { id: '2', label: 'Valid2' },
    { id: '3', label: 'Valid3' },
  ],
  validateInput: (value: string) => {
    if (!value) return 'This field is required';
    if (!['1', '2', '3'].includes(value)) return 'Invalid option';
    return '';
  },
};
