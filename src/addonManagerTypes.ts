import { addonType } from './addonTypes';

/**
 * Basic details that every addon manager is expected to have.
 *
 * @param type correspond to the type of addons the manager accept.
 */
export type basicAddonManagerDetails = {
  type: addonType;
} & Record<string, unknown>;
