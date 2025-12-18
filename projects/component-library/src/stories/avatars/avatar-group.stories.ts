import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  AvatarGroupComponent,
} from 'component-library';

const meta: Meta<AvatarGroupComponent> = {
  component: AvatarGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [AvatarComponent]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean'
    },
    limit: {
      control: 'number'
    },
    layering: {
      options: ['first_on_top', 'last_on_top'],
      control: 'select'
    },
    overlap: {
      control: 'number'
    },
    size: {
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      control: 'select'
    },
  },
  args: {
    layering: 'last_on_top',
    overlap: -12
  }
}

export default meta;

type Story = StoryObj<AvatarGroupComponent>;
export const Sample: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            [bordered]="${args.bordered}"
            [limit]="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" />
          <avatar name="Jane Doe" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true
  }
};

export const NoBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" />
          <avatar name="Jane Doe"  />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    bordered: false
  }
};

export const OnlyImagesNoNameWithBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    bordered: true
  }
};

export const OnlyNamesNoImagesWithBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" />
          <avatar name="Natasha Hinter" />
          <avatar name="Joe Soap" />
          <avatar name="Jane Doe" />
          <avatar name="John Wayne" />
        </avatar-group>
      `
    }
  },
  args: {
    bordered: true
  }
};

export const OnlyImagesWithoutBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    bordered: false
  }
};

export const OnlyTextWithoutBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" />
          <avatar name="Natasha Hinter" />
          <avatar name="Joe Soap" />
          <avatar name="Jane Doe" />
          <avatar name="John Wayne"  />
        </avatar-group>
      `
    }
  },
  args: {
    bordered: false
  }
};

export const IndividualBorderedValues: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="false" />
          <avatar name="Joe Soap" [bordered]="false" />
          <avatar name="Jane Doe" [bordered]="true" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true
  }
};

export const GroupSize3XS: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '3xs'
  }
};

export const GroupSize2XS: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '2xs'
  }
};

export const GroupSizeXS: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: 'xs'
  }
};

export const GroupSizeSmall: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: 'sm'
  }
};

export const GroupSizeMedium: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: 'md'
  }
};

export const GroupSizeLarge: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: 'lg'
  }
};

export const GroupSizeXL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: 'xl'
  }
};

export const GroupSize2XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '2xl'
  }
};

export const GroupSize3XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '3xl'
  }
};

export const GroupSize4XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '4xl'
  }
};

export const GroupSize5XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '5xl'
  }
};

export const GroupSize6XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '6xl'
  }
};

export const GroupSize7XL: Story = {
  parameters: {

  },
  render: (args) => {
    return {
      template: `
        <avatar-group
            limit="${args.limit}"
            [layering]="'${args.layering}'"
            [overlap]="${args.overlap}"
            [bordered]="${args.bordered}"
            [size]="'${args.size}'"
        >
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
    bordered: true,
    size: '7xl'
  }
};
