import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StarReview, StarReviewProps } from './starReview'; // Adjust the import based on your project structure
import { Formik, Form } from 'formik'; // Import Formik components

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
  },
} as Meta;

const Template: StoryFn<StarReviewProps> = (args) => (
  <Formik
    initialValues={{ rating: '' }} // Provide initial values for Formik
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
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  name: 'rating',
  type: 'star',
  errorText: 'This field is required',
};

export const FaceRating = Template.bind({});
FaceRating.args = {
  name: 'rating',
  type: 'face',
  errorText: '',
};

export const FaceRatingWithError = Template.bind({});
FaceRatingWithError.args = {
  name: 'rating',
  type: 'face',
  errorText: 'Please rate using stars',
};
