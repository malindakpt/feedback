import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import BooleanInput, { BooleanInputProps } from "./booleanInput";

export default {
  title: "Shared/BooleanInput",
  component: BooleanInput,
  argTypes: {
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<BooleanInputProps> = (args) => {
  const [state, setState] = useState<boolean>(args.value || false);

  const handleChange = (name: string, newValue: boolean) => {
    setState(newValue);
    args.onChange?.(name, newValue);
  };

  return <BooleanInput {...args} value={state} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: false,
  name: "defaultSwitch",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: true,
  name: "disabledSwitch",
  disabled: true,
};
