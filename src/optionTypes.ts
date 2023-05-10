export type optionDefinition<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  [K in keyof T]: {
    type: 'string' | 'number' | 'boolean' | 'enum' | 'array';
    label?: string;
    description?: string;
    defaultValue?: T[K];
    options?: { value: T[K]; label?: string }[];
    readonly?: boolean;
    required?: boolean;
  };
};
