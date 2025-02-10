import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Formik, Form } from 'formik';
import TextInput, { TextInputProps } from './textInput';

export default {
  title: 'Shared/TextInput',
  component: TextInput,
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => (
  <Formik
    initialValues={{ [args.name || 'fieldName']: '' }}
    onSubmit={(values) => console.log('Formik Values:', values)}
  >
    {() => (
      <Form>
        <TextInput {...args} />
      </Form>
    )}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  name: 'defaultInput',
  required: false,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'Email',
  name: 'email',
  required: true,
  errorText: 'Invalid email address',
};