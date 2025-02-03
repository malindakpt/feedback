import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ImageUploader from "./imageUploader"; // Adjust the import path

export default {
  title: "Components/ImageUploader",
  component: ImageUploader,
  argTypes: {
    disabled: { control: "boolean" },
    uploadedUrl: { control: "text" },
    name: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof ImageUploader> = (args) => <ImageUploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "profileImage",
  uploadedUrl: null,
  disabled: false,
};

export const WithUploadedImage = Template.bind({});
WithUploadedImage.args = {
  name: "profileImage",
  uploadedUrl: "https://via.placeholder.com/150", // Placeholder image
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "profileImage",
  uploadedUrl: "https://via.placeholder.com/150", // Placeholder image
  disabled: true,
};
