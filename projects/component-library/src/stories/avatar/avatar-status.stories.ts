import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent} from 'component-library';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: ['online', 'offline'],
      control: 'select'
    },
  }
}

export default meta;

type Story = StoryObj<AvatarComponent>;

export const Sample: Story = {
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
