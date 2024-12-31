import React, { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CommentBox from './comments';

export default {
  title: 'Components/CommentBox',
  component: CommentBox,
  argTypes: {
    value: {
      control: 'text',
      description: 'The current value of the comment input',
    },
    label: {
      control: 'text',
      description: 'The label for the comment input',
      defaultValue: 'Comment',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field and buttons',
    },
    onChange: {
      action: 'onChange',
      description: 'Handler for updating the comment value',
    },
  },
} as Meta<typeof CommentBox>;

const Template: StoryFn<typeof CommentBox> = (args) => {
  const [commentValue, setCommentValue] = useState(args.value);

  // Synchronize local state with Storybook's controls
  useEffect(() => {
    setCommentValue(args.value);
  }, [args.value]);

  return (
    <CommentBox
      {...args}
      value={commentValue}
      onChange={(newValue) => {
        setCommentValue(newValue);
        args.onChange(newValue); // Log changes in the Storybook actions panel
      }}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  value: 'Add your comment here..',
  disabled: false,
};

// Predefined Value
export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 'This is a predefined comment.',
  disabled: false,
};

// Disabled State
export const DisabledState = Template.bind({});
DisabledState.args = {
  value: 'This is a disabled comment box.',
  disabled: true,
};

// Custom Label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  value: '',
  label: 'Your Feedback',
  disabled: false,
};

// Interactive Example
export const Interactive = Template.bind({});
Interactive.args = {
  value: 'Feel free to share your thoughts!',
  disabled: false,
};
