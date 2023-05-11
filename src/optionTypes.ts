/**
 * Give information on options type. (specially useful to on runtime)
 *
 * @example
 * ```ts
 * type customOption = {
 *  fieldA: boolean,
 *  fieldB: string
 * }
 *
 * type customOptionDefinition = optionDefinition<customOption>
 *
 * const customOptionsEx: customOption = {
 *  fieldA: true,
 *  fieldB: "abcd"
 * }
 *
 * const customOptionsDefinitionEx: customOptionDefinition = {
 *  fieldA: {
 *    type: "boolean",
 *    label: "A field",
 *    defaultValue: false,
 *    required: true
 *  },
 *  fieldB: {
 *    type: "string",
 *    label: "B field",
 *    defaultValue: "",
 *    required: false
 *  },
 * }
 * ```
 */
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
