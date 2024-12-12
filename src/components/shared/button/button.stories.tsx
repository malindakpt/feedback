import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./button";

export default {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    text: { control: "text", description: "Text displayed inside the button" },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning", "info"],
      description: "The color of the button",
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
      description: "The variant of the button",
    },
    onClick: {
      action: "clicked",
      description: "Callback triggered when the button is clicked",
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  color: "primary",
  variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  color: "secondary",
  variant: "outlined",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success Button",
  color: "success",
  variant: "contained",
};

export const TextButton = Template.bind({});
TextButton.args = {
  text: "Text Button",
  color: "info",
  variant: "text",
};
