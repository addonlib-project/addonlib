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

export type basicAddonResources = {} & Record<string, unknown>;

export type basicAddonSettings = {} & Record<string, unknown>;
