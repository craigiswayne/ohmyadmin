import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent, random_number_between} from 'component-library';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<AvatarComponent>;

export const Sample: Story = {
  args: {
    name: 'Jane Doe',
    image_url: `https://mockmind-api.uifaces.co/content/human/${random_number_between(1,100)}.jpg`,
    bordered: true
  }
}

export const OnlyImage: Story = {
  args: {
    image_url: `https://mockmind-api.uifaces.co/content/human/${random_number_between(1,100)}.jpg`
  }
}

export const MiddleNameAndImage: Story = {
  args: {
    name: 'Craig Wayne Govender',
    image_url: `https://mockmind-api.uifaces.co/content/human/${random_number_between(1,100)}.jpg`
  }
}

export const NameAndNoImage: Story = {
  args: {
    name: 'Jane Doe'
  }
}

export const MiddleNameAndNoImage: Story = {
  args: {
    name: 'Craig Wayne Govender'
  }
}

export const NoLastName: Story = {
  args: {
    name: 'Jane'
  }
}

export const WithNameAndBrokenImage: Story = {
  args: {
    name: 'Craig Govender',
    image_url: `https://mockmind-api.uifaces.co/content/human/x.jpg`
  }
}

export const NameWithLeadingSpaces: Story = {
  args: {
    name: '  Craig   Wayne   Govender'
  }
}
