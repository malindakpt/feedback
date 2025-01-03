import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Formik, Form } from "formik";
import CommentBox, { CommentBoxProps } from "./comments";

export default {
  title: "Components/CommentBox",
  component: CommentBox,
} as Meta;

const Template: StoryFn<CommentBoxProps> = (args) => (
  <Formik
    initialValues={{ comment: "" }} // Set initial state for the Formik field
    onSubmit={(values) => console.log("Submitted:", values)}
  >
    <Form>
      <CommentBox {...args} name="comment" />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: "Comment",
  name: "comment",
};

export const WithPredefinedValue = Template.bind({});
WithPredefinedValue.args = {
  label: "Comment",
  name: "comment",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Comment",
  name: "comment",
  disabled: true,
};
