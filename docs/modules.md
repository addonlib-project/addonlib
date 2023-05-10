[@addonlib/addonlib](README.md) / Exports

# @addonlib/addonlib

## Table of contents

### Namespaces

- [optionUtils](modules/optionUtils.md)

### Classes

- [AbstractAddon](classes/AbstractAddon.md)
- [AbstractAddonManager](classes/AbstractAddonManager.md)
- [AddonManagerCenter](classes/AddonManagerCenter.md)

### Type Aliases

- [addonType](modules.md#addontype)
- [basicAddonDetails](modules.md#basicaddondetails)
- [basicAddonManagerCenterDetails](modules.md#basicaddonmanagercenterdetails)
- [basicAddonManagerDetails](modules.md#basicaddonmanagerdetails)
- [basicAddonResources](modules.md#basicaddonresources)
- [basicAddonSettings](modules.md#basicaddonsettings)
- [optionDefinition](modules.md#optiondefinition)

## Type Aliases

### addonType

Ƭ **addonType**: ``"addon"`` \| `string` & {}

#### Defined in

[src/addonTypes.ts:13](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonTypes.ts#L13)

___

### basicAddonDetails

Ƭ **basicAddonDetails**: { `apiVersion`: `string` ; `authors`: `string`[] ; `dependencies`: `string`[] ; `description`: `string` ; `id`: `string` ; `tags`: `string`[] ; `title`: `string` ; `type`: [`addonType`](modules.md#addontype) ; `version`: `string`  } & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonTypes.ts:1](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonTypes.ts#L1)

___

### basicAddonManagerCenterDetails

Ƭ **basicAddonManagerCenterDetails**: {} & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonManagerCenterTypes.ts:1](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonManagerCenterTypes.ts#L1)

___

### basicAddonManagerDetails

Ƭ **basicAddonManagerDetails**: { `type`: [`addonType`](modules.md#addontype)  } & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonManagerTypes.ts:3](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonManagerTypes.ts#L3)

___

### basicAddonResources

Ƭ **basicAddonResources**: {} & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonTypes.ts:15](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonTypes.ts#L15)

___

### basicAddonSettings

Ƭ **basicAddonSettings**: {} & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonTypes.ts:17](https://github.com/addonlib-project/addonlib/blob/55287ef/src/addonTypes.ts#L17)

___

### optionDefinition

Ƭ **optionDefinition**<`T`\>: { [K in keyof T]: Object }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Defined in

[src/optionTypes.ts:1](https://github.com/addonlib-project/addonlib/blob/55287ef/src/optionTypes.ts#L1)
