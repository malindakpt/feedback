import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StarReview, StarReviewProps } from './starReview';
import { Formik, Form } from 'formik';

export default {
  title: 'Components/StarReview',
  component: StarReview,
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the field for formik context',
    },
    type: {
      control: { type: 'select', options: ['star', 'face'] },
      description: 'The type of rating (star or face)',
    },
    errorText: {
      control: 'text',
      description: 'Error text to display below the rating component',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the rating component is disabled',
    },
  },
} as Meta;

const Template: StoryFn<StarReviewProps> = (args) => (
  <Formik
    initialValues={{ rating: '' }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form>
      <StarReview {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  name: 'rating',
  type: 'star',
  errorText: '',
  disabled: false,
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  name: 'rating',
  type: 'star',
  errorText: 'This field is required',
  disabled: false,
};

export const FaceRating = Template.bind({});
FaceRating.args = {
  name: 'rating',
  type: 'face',
  errorText: '',
  disabled: false,
};

export const FaceRatingWithError = Template.bind({});
FaceRatingWithError.args = {
  name: 'rating',
  type: 'face',
  errorText: 'Please rate using faces',
  disabled: false,
};

export const DisabledRating = Template.bind({});
DisabledRating.args = {
  name: 'rating',
  type: 'star',
  errorText: '',
  disabled: true,
};

export const DisabledFaceRating = Template.bind({});
DisabledFaceRating.args = {
  name: 'rating',
  type: 'face',
  errorText: '',
  disabled: true,
};
