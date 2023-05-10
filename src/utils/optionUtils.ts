import { optionDefinition } from '..';

export function optionDefinitionToOption<T extends Record<string, unknown>>(
  definition: optionDefinition<T>
): T {
  let concrete = {};
  for (let row of Object.keys(definition)) {
    concrete = { ...concrete, [row]: definition[row].defaultValue };
  }
  return concrete as T;
}
