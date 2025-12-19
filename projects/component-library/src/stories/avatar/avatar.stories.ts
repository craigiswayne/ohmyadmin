import type { Meta, StoryObj } from '@storybook/angular';
import {AvatarComponent} from 'component-library';
import {ResponsiveContainerControls} from 'component-library/stories/types/responsive-container-control.type';

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
          flex-direction: column;
          row-gap: 5px;
       }`
      ],
      template: `
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="3xs" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="2xs" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="xs" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="sm" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="md" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="lg" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="2xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="3xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="4xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="5xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="6xl" [status]="'${args.status}'" />
        <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" size="7xl" [status]="'${args.status}'" />
      `
    }
  },
  args: {
    bordered: true,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe',
    status: undefined
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


type StoryWithContainerControls = StoryObj<ResponsiveContainerControls<AvatarComponent>>;

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
        <div class="container" style="height:${args.container_height}px; width: ${args.container_width}px">
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="3xs" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="2xs" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="xs" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="sm" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="md" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="lg" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="2xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="3xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="4xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="5xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="6xl" />
          <avatar image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="${args.bordered}" size="7xl" />
        </div>
      `
    }
  },
  args: {
    bordered: true,
    container_height: 300,
    container_width: 300
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
        <div class="container" style="height:${args.container_height}px; width: ${args.container_width}px">
          <avatar [name]="'${args.name}'" [image_url]="'${args.image_url}'" [bordered]="${args.bordered}" [size]="'${args.size}'" />
        </div>
      `
    }
  },
  args: {
    bordered: true,
    container_height: 300,
    container_width: 300,
    image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
    name: 'Jane Doe',
    size: '7xl'
  }
};
