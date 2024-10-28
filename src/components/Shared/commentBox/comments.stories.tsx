import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CommentBox from './comments';
import { Provider } from 'react-redux';
import { store } from './store';

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
