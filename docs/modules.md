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

Ƭ **addonType**: `"addon"` \| `string` & {}

#### Defined in

[src/addonTypes.ts:16](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonTypes.ts#L16)

---

### basicAddonDetails

Ƭ **basicAddonDetails**: { `apiVersion`: `string` ; `authors`: `string`[] ; `dependencies`: `string`[] ; `description`: `string` ; `id`: `string` ; `tags`: `string`[] ; `title`: `string` ; `type`: [`addonType`](modules.md#addontype) ; `version`: `string` } & `Record`<`string`, `unknown`\>

Basic details that every addon is expected to have.

#### Defined in

[src/addonTypes.ts:4](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonTypes.ts#L4)

---

### basicAddonManagerCenterDetails

Ƭ **basicAddonManagerCenterDetails**: {} & `Record`<`string`, `unknown`\>

#### Defined in

[src/addonManagerCenterTypes.ts:1](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonManagerCenterTypes.ts#L1)

---

### basicAddonManagerDetails

Ƭ **basicAddonManagerDetails**: { `type`: [`addonType`](modules.md#addontype) } & `Record`<`string`, `unknown`\>

Basic details that every addon manager is expected to have.

**`Param`**

correspond to the type of addons the manager accept.

#### Defined in

[src/addonManagerTypes.ts:8](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonManagerTypes.ts#L8)

---

### basicAddonResources

Ƭ **basicAddonResources**: {} & `Record`<`string`, `unknown`\>

Basic resources that every addon is expected to have.

#### Defined in

[src/addonTypes.ts:21](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonTypes.ts#L21)

---

### basicAddonSettings

Ƭ **basicAddonSettings**: {} & `Record`<`string`, `unknown`\>

Basic settings that every addon is expected to have

#### Defined in

[src/addonTypes.ts:26](https://github.com/addonlib-project/addonlib/blob/1822980/src/addonTypes.ts#L26)

---

### optionDefinition

Ƭ **optionDefinition**<`T`\>: { [K in keyof T]: Object }

Give information on options type. (specially useful to on runtime)

**`Example`**

```ts
type customOption = {
  fieldA: boolean;
  fieldB: string;
};

type customOptionDefinition = optionDefinition<customOption>;

const customOptionsEx: customOption = {
  fieldA: true,
  fieldB: 'abcd',
};

const customOptionsDefinitionEx: customOptionDefinition = {
  fieldA: {
    type: 'boolean',
    label: 'A field',
    defaultValue: false,
    required: true,
  },
  fieldB: {
    type: 'string',
    label: 'B field',
    defaultValue: '',
    required: false,
  },
};
```

#### Type parameters

| Name | Type                                                                    |
| :--- | :---------------------------------------------------------------------- |
| `T`  | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Defined in

[src/optionTypes.ts:34](https://github.com/addonlib-project/addonlib/blob/1822980/src/optionTypes.ts#L34)
