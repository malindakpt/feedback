import React from "react";
import {  StoryFn, Meta  } from "@storybook/react";
import ImageUploader from "./imageUploader"; // Adjust the import path as necessary


export default {
  title: 'Components/ImageUploader',
  component: ImageUploader,
} as Meta<typeof ImageUploader>;

const Template: StoryFn<typeof ImageUploader> = (args) => <ImageUploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelect: (file: File | null) => {
    console.log('Selected file:', file);
  },
  uploadedUrl: null, // No image uploaded
};

export const WithUploadedImage = Template.bind({});
WithUploadedImage.args = {
  onSelect: (file: File | null) => {
    console.log('Selected file:', file);
  },
  uploadedUrl: "https://i.postimg.cc/d1FknZpY/2020-11-11-10-52-IMG-1342.jpg", // Local image import
};



