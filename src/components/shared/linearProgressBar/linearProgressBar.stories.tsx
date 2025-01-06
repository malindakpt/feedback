import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LinearProgressBar, { LinearProgressBarProps } from "./linearProgressBar";

export default {
  title: "Components/LinearProgressBar",
  component: LinearProgressBar,
  argTypes: {
    value: {
      control: { type: "number" },
      description: "Value of the progress for determinate variant (0-100).",
    },
    variant: {
      control: {
        type: "select",
        options: ["determinate", "indeterminate", "buffer", "query"],
      },
      description: "The variant of the progress bar.",
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "error", "info", "success", "warning"],
      },
      description: "The color of the progress bar.",
    },
    thickness: {
      control: { type: "number" },
      description: "Thickness of the progress bar in pixels.",
    },
    sx: {
      control: { type: "object" },
      description: "Custom styles for the progress bar container.",
    },
  },
} as Meta<LinearProgressBarProps>;

const Template: StoryFn<LinearProgressBarProps> = (args) => (
  <LinearProgressBar {...args} />
);

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: "indeterminate",
  color: "primary",
};

export const Determinate = Template.bind({});
Determinate.args = {
  variant: "determinate",
  value: 50,
  color: "secondary",
};

export const CustomThickness = Template.bind({});
CustomThickness.args = {
  thickness: 8,
  variant: "determinate",
  value: 75,
  color: "success",
};

export const BufferVariant = Template.bind({});
BufferVariant.args = {
  variant: "buffer",
  color: "info",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: { mt: 2, bgcolor: "lightgray" },
  thickness: 6,
  variant: "query",
  color: "warning",
};
