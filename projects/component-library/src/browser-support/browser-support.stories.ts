import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {
  AvatarComponent,
  AvatarGroupComponent,
} from 'component-library';
import {BrowserSupportComponent} from 'component-library/browser-support/browser-support.component';

const meta: Meta<BrowserSupportComponent> = {
  component: BrowserSupportComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarGroupComponent,
        AvatarComponent
      ]
    })
  ],
  argTypes: {
    chrome: {
      control: 'boolean'
    },
    edge: {
      control: 'boolean'
    },
    firefox: {
      control: 'boolean'
    },
    safari: {
      control: 'boolean'
    }
  },
  tags: ['autodocs'],
  args: {
    chrome: true,
    edge: true,
    firefox: true,
    safari: false
  }
}

export default meta;

type Story = StoryObj<BrowserSupportComponent>;
export const Sample: Story = {};
