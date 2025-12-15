import type { StorybookConfig } from '@storybook/angular/dist';

const config: StorybookConfig = {
  'stories': [
    '../src/**/*.stories.ts'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  'framework': '@storybook/angular'
};
export default config;
