/**
 * Basic details that every addon is expected to have.
 */
export type basicAddonDetails = {
  id: string;
  title: string;
  type: addonType;
  version: string;
  apiVersion: string;
  authors: Array<string>;
  description: string;
  tags: Array<string>;
  dependencies: Array<string>;
} & Record<string, unknown>;

export type addonType = 'addon' | (string & {});

/**
 * Basic resources that every addon is expected to have.
 */
export type basicAddonResources = {} & Record<string, unknown>;

/**
 * Basic settings that every addon is expected to have
 */
export type basicAddonSettings = {} & Record<string, unknown>;
