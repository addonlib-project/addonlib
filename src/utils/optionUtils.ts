import { optionDefinition } from '../optionTypes';

/**
 *
 * Get valid options from optionDefinition variable
 *
 * @param definition
 * @returns
 *
 * @example
 * ```ts
 * optionDefinitionToOption({myOption: {type: "string", defaultValue: "a"}})
 * ```
 * returns
 * ```
 * {myOption: "a"}
 * ```
 */
export function optionDefinitionToOption<T extends Record<string, unknown>>(
  definition: optionDefinition<T>
): T {
  let concrete = {};
  for (let row of Object.keys(definition)) {
    concrete = { ...concrete, [row]: definition[row].defaultValue };
  }
  return concrete as T;
}
