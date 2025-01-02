import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Formik, Form } from "formik";
import DateInput, { DateInputProps } from "./dateInput";

export default {
  title: "Shared/DateInput",
  component: DateInput,
} as Meta;

const Template: StoryFn<DateInputProps> = (args) => (
  <Formik
    initialValues={{ date: "" }}
    onSubmit={(values) => console.log("Form submitted:", values)}
  >
    <Form>
      <DateInput {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Date",
  name: "date",
  required: false,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: "Select a Date",
  name: "date",
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Date Input",
  name: "date",
  required: false,
  disabled: true,
};
