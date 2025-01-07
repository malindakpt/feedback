import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import BooleanInput, { BooleanInputProps } from './booleanInput';
import { Formik } from 'formik';

// Storybook metadata
export default {
  title: 'Components/BooleanInput',
  component: BooleanInput,
  argTypes: {
    name: { control: 'text' },
    errorText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

// Template for rendering the BooleanInput component
const Template: StoryFn<BooleanInputProps> = (args) => (
  <Formik
    initialValues={{ [args.name]: false }} // Initialize form with default false value
    onSubmit={() => console.log('Form submitted')}
  >
    {() => <BooleanInput {...args} />}
  </Formik>
);

// Default story: controlling all props
export const Default = Template.bind({});
Default.args = {
  name: 'enableFeature',
  errorText: '',
  disabled: false,
};

// Story with error message
export const WithError = Template.bind({});
WithError.args = {
  name: 'enableFeatureWithError',
  errorText: 'This field is required',
  disabled: false,
};

// Story with disabled switch
export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledFeature',
  errorText: '',
  disabled: true,
};


