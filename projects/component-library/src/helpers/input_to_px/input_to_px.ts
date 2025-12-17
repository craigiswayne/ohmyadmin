import type { INPUT_TO_PX_ALLOWED_VALUES } from './input_to_px.type';

export const input_to_px = (value: INPUT_TO_PX_ALLOWED_VALUES): string | undefined => {
  if (value === undefined || value === null) {
    return undefined;
  }

  return `${value}px`;
};
