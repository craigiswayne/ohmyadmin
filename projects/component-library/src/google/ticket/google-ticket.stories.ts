import type { Meta, StoryObj } from '@storybook/angular';

import { GoogleTicketComponent } from 'component-library';

const meta = {
  component: GoogleTicketComponent,
} satisfies Meta<typeof GoogleTicketComponent>;

export default meta;
type Story = StoryObj<GoogleTicketComponent>;

export const standard: Story = {};
