import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageUploader from '../Components/ImageUploader/ImageUploader';
import Account from '../Components/ImageUploader/Account';

// Meta configuration for both ImageUploader and Account components in Storybook
export default {
  title: 'Components/AccountAndImageUploader',
  component: ImageUploader,
  argTypes: {
    employeeID: { control: 'text' },
  },
} as Meta<typeof ImageUploader>;

// Template for rendering the ImageUploader component with props
const ImageUploaderTemplate: StoryFn<typeof ImageUploader> = (args) => <ImageUploader {...args} />;

// Template for rendering the Account component
const AccountTemplate: StoryFn<typeof Account> = () => <Account />;

// Default story for ImageUploader with an employeeID
export const DefaultImageUploader = ImageUploaderTemplate.bind({});
DefaultImageUploader.args = {
  employeeID: 'employee123',
};

// Story for ImageUploader with another employeeID
export const AnotherEmployeeImageUpload = ImageUploaderTemplate.bind({});
AnotherEmployeeImageUpload.args = {
  employeeID: 'employee456',
};

// Story for the Account component which integrates ImageUploader
export const AccountWithImageUploader = AccountTemplate.bind({});
