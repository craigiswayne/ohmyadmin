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
    bordered: true,
    name: 'Jane Doe',
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    size: 'md',
    status: 'online'
  }
}

export const AllSizes: Story = {
  render: (args) => {
    return {
      template: `
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="3xs" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="2xs" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="xs" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="sm" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="md" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="lg" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="2xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="3xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="4xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="5xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="6xl" />
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" [status]="'${args.status}'" size="7xl" />
      `
    }
  },
  args: {
    bordered: true,
    status: 'online'
  }
};
