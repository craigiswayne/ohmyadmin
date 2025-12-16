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
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'" [overlap]="${args.overlap}">
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="true" />
          <avatar name="Joe Soap" [bordered]="true" />
          <avatar name="Jane Doe" [bordered]="true" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" [bordered]="true" />
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/6.jpg" [bordered]="true" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/7.jpg" [bordered]="true" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/8.jpg" [bordered]="true" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/9.jpg" [bordered]="true" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/10.jpg" [bordered]="true" />
        </avatar-group>
      `
    }
  },
  args: {
    limit: 5,
  }
};

export const SampleWithNoBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'" [overlap]="${args.overlap}">
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" [bordered]="true" />
          <avatar name="Jane Doe" [bordered]="true" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
        </avatar-group>
      `
    }
  }
};

export const OnlyImagesWithBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'">
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" [bordered]="true" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" [bordered]="true" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" [bordered]="true"/>
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" [bordered]="true"/>
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" [bordered]="true" />
        </avatar-group>
      `
    }
  }
};

export const OnlyTextWithBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'">
          <avatar name="Craig Wayne" [bordered]="true" />
          <avatar name="Natasha Hinter" [bordered]="true" />
          <avatar name="Joe Soap" [bordered]="true" />
          <avatar name="Jane Doe" [bordered]="true" />
          <avatar name="John Wayne" [bordered]="true" />
        </avatar-group>
      `
    }
  }
};

export const OnlyImagesWithoutBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'">
          <avatar name="Craig Wayne" image_url="https://mockmind-api.uifaces.co/content/human/1.jpg" />
          <avatar name="Natasha Hinter" image_url="https://mockmind-api.uifaces.co/content/human/2.jpg" />
          <avatar name="Joe Soap" image_url="https://mockmind-api.uifaces.co/content/human/3.jpg" />
          <avatar name="Jane Doe" image_url="https://mockmind-api.uifaces.co/content/human/4.jpg" />
          <avatar name="John Wayne" image_url="https://mockmind-api.uifaces.co/content/human/5.jpg" />
        </avatar-group>
      `
    }
  }
};

export const OnlyTextWithoutBorders: Story = {
  render: (args) => {
    return {
      template: `
        <avatar-group limit="${args.limit}" [layering]="'${args.layering}'">
          <avatar name="Craig Wayne" />
          <avatar name="Natasha Hinter" />
          <avatar name="Joe Soap" />
          <avatar name="Jane Doe" />
          <avatar name="John Wayne"  />
        </avatar-group>
      `
    }
  }
};

export const BrowserSupport: Story = {
  render: (args) => {
    return {
      styles: [
        `
          :host ::ng-deep avatar img {
            width: auto;
            height: calc(100% - 2px);
            border-radius: unset;
          }
        `
      ],
      template: `
        <avatar-group limit="${args.limit}" layering="first_on_top" overlap="-5px">
          <avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-chrome-icon.svg" />
          <avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg" />
        </avatar-group>
        <avatar-group limit="${args.limit}" layering="first_on_top" overlap="-5px">
          <avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/edge-browser-icon.svg" />
          <avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/available.svg" />
        </avatar-group>
        <avatar-group limit="${args.limit}" layering="first_on_top" overlap="-5px">
          <avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.svg" />
          <avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg" />
        </avatar-group>
        <avatar-group limit="${args.limit}" layering="first_on_top" overlap="-5px">
          <avatar image_url="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/safari-icon.svg" />
          <avatar image_url="https://raw.githubusercontent.com/web-platform-dx/developer-signals/refs/heads/main/img/unavailable.svg" />
        </avatar-group>
      `
    }
  }
};
