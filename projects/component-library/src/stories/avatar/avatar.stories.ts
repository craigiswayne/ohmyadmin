import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent} from 'component-library';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large', 'extra-extra-large'],
      control: 'select'
    },
    status: {
      options: ['online', 'offline'],
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<AvatarComponent>;

export const Sample: Story = {
  args: {
    name: 'Jane Doe',
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
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
        <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="small" />
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


type ContainerControls<T> = T & { container_max_height: number; container_max_width: number }

type StoryWithContainerControls = StoryObj<ContainerControls<AvatarComponent>>;

export const ResponsiveAllSizes: StoryWithContainerControls = {
  render: (args) => {
    return {
      styles: [
        `
          :host {
            display: flex;
          }
        `,
        `
          .container {
            display: flex;
            flex-wrap: wrap;
            background: gray;
            column-gap: 6px;
          }
        `
      ],
      template: `
        <div class="container" style="max-height:${args.container_max_height}px; max-width: ${args.container_max_width}px">
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-small" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="small" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="medium" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="large" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-large" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="extra-extra-large" />
        </div>
      `
    }
  },
  args: {
    bordered: true,
    container_max_height: 66,
    container_max_width: 200
  }
};

export const ResponsiveJustOne: StoryWithContainerControls = {
  render: (args) => {
    return {
      styles: [
        `
          :host {
            display: flex;
          }
        `,
        `
          .container {
            display: flex;
            flex-wrap: wrap;
            background: gray;
            column-gap: 6px;
          }
        `
      ],
      template: `
        <div class="container" style="max-height:${args.container_max_height}px; max-width: ${args.container_max_width}px">
          <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" [size]="'${args.size}'" />
        </div>
      `
    }
  },
  args: {
    bordered: true,
    container_max_height: 500,
    container_max_width: 500,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe',
    size: 'medium'
  }
};
