// CommentBox.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CommentBox from './comments'; // Adjust path as needed
import { Provider } from 'react-redux';
import { store } from './store'; // Adjust path as needed

export default {
  title: 'Components/CommentBox',
  component: CommentBox,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <CommentBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
