import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent} from 'component-library';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select'
    },
    status: {
      options: ['online', 'offline'],
      control: 'select'
    },
  }
}

export default meta;

type Story = StoryObj<AvatarComponent>;

export const Sample: Story = {
  args: {
    name: 'Jane Doe',
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    bordered: true,
    status: 'online'
  }
}

export const AllSizes: Story = {
  render: (args) => {
    return {
      styles: [
       `:host {
          display: inline-flex;
          column-gap: 5px;
       }`
      ],
      template: `
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-small" [status]="'${args.status}'" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="small" [status]="'${args.status}'" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="medium" [status]="'${args.status}'" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="large" [status]="'${args.status}'" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-large" [status]="'${args.status}'" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-extra-large" [status]="'${args.status}'" />
      `
    }
  },
  args: {
    bordered: true,
    status: 'online'
  }
};

export const OnlyImage: Story = {
  args: {
    bordered: true,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg'
  }
}

export const MiddleNameAndImage: Story = {
  args: {
    bordered: true,
    name: 'Craig Wayne Govender',
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg'
  }
}

export const NameAndNoImage: Story = {
  args: {
    bordered: true,
    name: 'Jane Doe'
  }
}

export const MiddleNameAndNoImage: Story = {
  args: {
    bordered: true,
    name: 'Craig Wayne Govender'
  }
}

export const NoLastName: Story = {
  args: {
    bordered: true,
    name: 'Jane'
  }
}

export const WithNameAndBrokenImage: Story = {
  args: {
    bordered: true,
    name: 'Craig Govender',
    image_url: `https://mockmind-api.uifaces.co/content/human/x.jpg`
  }
}

export const NameWithLeadingSpaces: Story = {
  args: {
    bordered: true,
    name: '  Craig   Wayne   Govender'
  }
}
