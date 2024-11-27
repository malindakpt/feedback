import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { StarReview, StarReviewProps } from './starReview';

export default {
  title: 'Components/Rating/StarReview',
  component: StarReview,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['star', 'face'],
    },
    onRatingChange: { action: 'rating changed' },
  },
} as Meta;

const Template: StoryFn<StarReviewProps> = (args: StarReviewProps) => (
  <StarReview
    {...args}
    onRatingChange={(value) => {
      console.log(`Selected rating: ${value}`);
      args.onRatingChange(value);
    }}
  />
);

export const StarRating = Template.bind({});
StarRating.args = {
  type: 'star',
};


