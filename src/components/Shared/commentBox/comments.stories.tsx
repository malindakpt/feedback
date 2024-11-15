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

export const Default = Template.bind({});
Default.args = {
  value: 'Add your comment here..',
};
