import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent, random_number_between} from 'component-library';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large', 'extra-extra-large'],
      control: 'select'
    },
  }
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
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-small" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="small"/>
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="medium" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="large" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-large" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-extra-large" />
      `
    }
  },
  args: {
    bordered: true
  }
};

export const CustomNumberSize: Story = {
  render: (args) => {
    return {
      styles: [
       `:host {
          display: inline-flex;
          column-gap: 5px;
       }`
      ],
      template: `
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" size="100" [bordered]="${args.bordered}"/>
      `
    }
  },
  args: {
    bordered: true
  }
};

export const OnlyImage: Story = {
  args: {
    bordered: true,
    image_url: `https://mockmind-api.uifaces.co/content/human/${random_number_between(1,100)}.jpg`
  }
}

export const MiddleNameAndImage: Story = {
  args: {
    bordered: true,
    name: 'Craig Wayne Govender',
    image_url: `https://mockmind-api.uifaces.co/content/human/${random_number_between(1,100)}.jpg`
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
