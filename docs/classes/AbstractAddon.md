[@addonlib/addonlib](../README.md) / [Exports](../modules.md) / AbstractAddon

# Class: AbstractAddon

## Hierarchy

- `EventEmitter`

  ↳ **`AbstractAddon`**

## Table of contents

### Constructors

- [constructor](AbstractAddon.md#constructor)

### Properties

- [resources](AbstractAddon.md#resources)
- [apiVersion](AbstractAddon.md#apiversion)
- [authors](AbstractAddon.md#authors)
- [captureRejectionSymbol](AbstractAddon.md#capturerejectionsymbol)
- [captureRejections](AbstractAddon.md#capturerejections)
- [defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners)
- [dependencies](AbstractAddon.md#dependencies)
- [description](AbstractAddon.md#description)
- [errorMonitor](AbstractAddon.md#errormonitor)
- [id](AbstractAddon.md#id)
- [tags](AbstractAddon.md#tags)
- [title](AbstractAddon.md#title)
- [type](AbstractAddon.md#type)
- [version](AbstractAddon.md#version)

### Methods

- [addListener](AbstractAddon.md#addlistener)
- [emit](AbstractAddon.md#emit)
- [error](AbstractAddon.md#error)
- [eventNames](AbstractAddon.md#eventnames)
- [getApiVersion](AbstractAddon.md#getapiversion)
- [getAuthors](AbstractAddon.md#getauthors)
- [getDependencies](AbstractAddon.md#getdependencies)
- [getDescription](AbstractAddon.md#getdescription)
- [getId](AbstractAddon.md#getid)
- [getMaxListeners](AbstractAddon.md#getmaxlisteners)
- [getResources](AbstractAddon.md#getresources)
- [getTags](AbstractAddon.md#gettags)
- [getTitle](AbstractAddon.md#gettitle)
- [getType](AbstractAddon.md#gettype)
- [getVersion](AbstractAddon.md#getversion)
- [listenerCount](AbstractAddon.md#listenercount)
- [listeners](AbstractAddon.md#listeners)
- [log](AbstractAddon.md#log)
- [off](AbstractAddon.md#off)
- [on](AbstractAddon.md#on)
- [onInstall](AbstractAddon.md#oninstall)
- [onLoad](AbstractAddon.md#onload)
- [onUninstall](AbstractAddon.md#onuninstall)
- [onUnload](AbstractAddon.md#onunload)
- [onUpdate](AbstractAddon.md#onupdate)
- [once](AbstractAddon.md#once)
- [prependListener](AbstractAddon.md#prependlistener)
- [prependOnceListener](AbstractAddon.md#prependoncelistener)
- [rawListeners](AbstractAddon.md#rawlisteners)
- [removeAllListeners](AbstractAddon.md#removealllisteners)
- [removeListener](AbstractAddon.md#removelistener)
- [setMaxListeners](AbstractAddon.md#setmaxlisteners)
- [warn](AbstractAddon.md#warn)
- [getApiVersion](AbstractAddon.md#getapiversion-1)
- [getAuthors](AbstractAddon.md#getauthors-1)
- [getDependencies](AbstractAddon.md#getdependencies-1)
- [getDescription](AbstractAddon.md#getdescription-1)
- [getEventListeners](AbstractAddon.md#geteventlisteners)
- [getId](AbstractAddon.md#getid-1)
- [getTags](AbstractAddon.md#gettags-1)
- [getTitle](AbstractAddon.md#gettitle-1)
- [getType](AbstractAddon.md#gettype-1)
- [getVersion](AbstractAddon.md#getversion-1)
- [listenerCount](AbstractAddon.md#listenercount-1)
- [on](AbstractAddon.md#on-1)
- [once](AbstractAddon.md#once-1)
- [setMaxListeners](AbstractAddon.md#setmaxlisteners-1)

## Constructors

### constructor

• **new AbstractAddon**(`resources?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | [`addonResourcesType`](../interfaces/addonResourcesType.md) |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/AbstractAddon.ts:18](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L18)

## Properties

### resources

• `Private` **resources**: [`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Defined in

[src/AbstractAddon.ts:16](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L16)

___

### apiVersion

▪ `Static` `Protected` **apiVersion**: `string`

#### Defined in

[src/AbstractAddon.ts:9](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L9)

___

### authors

▪ `Static` `Protected` **authors**: `string`[] = `[]`

#### Defined in

[src/AbstractAddon.ts:10](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L10)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](AbstractAddon.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:334

___

### dependencies

▪ `Static` `Protected` **dependencies**: `string`[] = `[]`

#### Defined in

[src/AbstractAddon.ts:13](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L13)

___

### description

▪ `Static` `Protected` **description**: `string`

#### Defined in

[src/AbstractAddon.ts:11](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L11)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](AbstractAddon.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### id

▪ `Static` `Protected` **id**: `string`

#### Defined in

[src/AbstractAddon.ts:5](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L5)

___

### tags

▪ `Static` `Protected` **tags**: `string`[] = `[]`

#### Defined in

[src/AbstractAddon.ts:12](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L12)

___

### title

▪ `Static` `Protected` **title**: `string`

#### Defined in

[src/AbstractAddon.ts:6](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L6)

___

### type

▪ `Static` `Protected` **type**: `string` = `'addon'`

#### Defined in

[src/AbstractAddon.ts:7](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L7)

___

### version

▪ `Static` `Protected` **version**: `string`

#### Defined in

[src/AbstractAddon.ts:8](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L8)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:354

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:610

___

### error

▸ **error**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:131](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L131)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:673

___

### getApiVersion

▸ **getApiVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:84](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L84)

___

### getAuthors

▸ **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:89](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L89)

___

### getDependencies

▸ **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:104](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L104)

___

### getDescription

▸ **getDescription**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:94](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L94)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:64](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L64)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](AbstractAddon.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:526

___

### getResources

▸ **getResources**(): [`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Returns

[`addonResourcesType`](../interfaces/addonResourcesType.md)

#### Defined in

[src/AbstractAddon.ts:109](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L109)

___

### getTags

▸ **getTags**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:99](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L99)

___

### getTitle

▸ **getTitle**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:69](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L69)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:74](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L74)

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:79](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L79)

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### log

▸ **log**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:123](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L123)

___

### off

▸ **off**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### on

▸ **on**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:385

___

### onInstall

▸ `Abstract` **onInstall**(): `void`

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:113](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L113)

___

### onLoad

▸ `Abstract` **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:117](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L117)

___

### onUninstall

▸ `Abstract` **onUninstall**(): `void`

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:121](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L121)

___

### onUnload

▸ `Abstract` **onUnload**(): `void`

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:119](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L119)

___

### onUpdate

▸ `Abstract` **onUpdate**(`previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`AbstractAddon`](AbstractAddon.md) |

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:115](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L115)

___

### once

▸ **once**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:414

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:638

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:654

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AbstractAddon`](AbstractAddon.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:510

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AbstractAddon`](AbstractAddon.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:494

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractAddon`](AbstractAddon.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractAddon`](AbstractAddon.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:520

___

### warn

▸ **warn**(`...parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `any`[] |

#### Returns

`void`

#### Defined in

[src/AbstractAddon.ts:127](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L127)

___

### getApiVersion

▸ `Static` **getApiVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:44](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L44)

___

### getAuthors

▸ `Static` **getAuthors**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:48](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L48)

___

### getDependencies

▸ `Static` **getDependencies**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:60](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L60)

___

### getDescription

▸ `Static` **getDescription**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:52](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L52)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### getId

▸ `Static` **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:28](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L28)

___

### getTags

▸ `Static` **getTags**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/AbstractAddon.ts:56](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L56)

___

### getTitle

▸ `Static` **getTitle**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:32](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L32)

___

### getType

▸ `Static` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:36](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L36)

___

### getVersion

▸ `Static` **getVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/AbstractAddon.ts:40](https://github.com/addonlib-project/addonlib/blob/d404357/src/AbstractAddon.ts#L40)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:254

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:195

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:317
