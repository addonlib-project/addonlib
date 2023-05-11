[@addonlib/addonlib](../README.md) / [Exports](../modules.md) / optionUtils

# Namespace: optionUtils

## Table of contents

### Functions

- [optionDefinitionToOption](optionUtils.md#optiondefinitiontooption)

## Functions

### optionDefinitionToOption

▸ **optionDefinitionToOption**<`T`\>(`definition`): `T`

Get valid options from optionDefinition variable

**`Example`**

```ts
optionDefinitionToOption({ myOption: { type: 'string', defaultValue: 'a' } });
```

returns

```
{myOption: "a"}
```

#### Type parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `T`  | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name         | Type                                                       |
| :----------- | :--------------------------------------------------------- |
| `definition` | [`optionDefinition`](../modules.md#optiondefinition)<`T`\> |

#### Returns

`T`

#### Defined in

[src/utils/optionUtils.ts:19](https://github.com/addonlib-project/addonlib/blob/1822980/src/utils/optionUtils.ts#L19)
