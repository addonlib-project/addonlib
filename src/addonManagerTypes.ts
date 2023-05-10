import { addonType } from './addonTypes';

export type basicAddonManagerDetails = {
  type: addonType;
} & Record<string, unknown>;
