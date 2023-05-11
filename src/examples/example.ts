import {
  basicAddonDetails,
  basicAddonResources,
  basicAddonSettings,
} from '../addonTypes';
import AbstractAddon from '../AbstractAddon';
import AbstractAddonManager from '../AbstractAddonManager';
import { basicAddonManagerDetails } from '../addonManagerTypes';
import { optionDefinition } from '../optionTypes';

//defining types

type logger = (...args: Array<unknown>) => unknown;

type testAddonResources = {
  logFunction: logger;
  warnFunction: logger;
  errorFunction: logger;
} & basicAddonResources;

type testAddonDetails = {} & basicAddonDetails;

type testAddonSettings = {
  logPrefix: string;
} & basicAddonSettings;

//defining addons

abstract class TestAddon<
  T extends testAddonDetails = testAddonDetails,
  V extends testAddonResources = testAddonResources,
  X extends testAddonSettings = testAddonSettings
> extends AbstractAddon<T, V, X> {
  public constructor(resources: V, details?: T) {
    super(
      resources,
      { type: 'test-addon', ...details } as T,
      {
        logPrefix: {
          type: 'string',
          label: 'Log prefix',
          defaultValue: '=>',
          description: 'Prefix for logging',
          required: true,
        },
      } as optionDefinition<X>
    );
  }

  public onInstall(): void {}
  public onUpdate(previous: TestAddon): void {}
  public onLoad(): void {
    this.on('log', (args) =>
      this.getResources().logFunction(this.getSettings().logPrefix, ...args)
    );
    this.on('warn', (args) =>
      this.getResources().warnFunction(this.getSettings().logPrefix, ...args)
    );
    this.on('error', (args) =>
      this.getResources().errorFunction(this.getSettings().logPrefix, ...args)
    );
  }
  public onUnload(): void {
    this.removeAllListeners('log');
    this.removeAllListeners('warn');
    this.removeAllListeners('error');
  }
  public onUninstall(): void {}
}

class TestAddon1<
  V extends testAddonResources = testAddonResources
> extends TestAddon {
  private static readonly details: basicAddonDetails = {
    id: 'test-addon-1',
    title: 'TestAddon1',
    description: '1rst test addon',
    version: '0.1',
    apiVersion: '1',
    type: 'addon',
    authors: ['leopoldhub'],
    dependencies: [],
    tags: ['example'],
  };

  public constructor(resources: V) {
    super(resources, TestAddon1.details);
  }
}

class TestAddon2<
  V extends testAddonResources = testAddonResources
> extends TestAddon {
  private static readonly details: basicAddonDetails = {
    id: 'test-addon-2',
    title: 'TestAddon2',
    description: '2nd test addon',
    version: '0.2',
    apiVersion: '1',
    type: 'addon',
    authors: ['leopoldhub'],
    dependencies: [],
    tags: ['example'],
  };

  public constructor(resources: V) {
    super(resources, TestAddon2.details);
  }
}

//defining addon manager

class TestAddonManager<
  T extends basicAddonManagerDetails = basicAddonManagerDetails,
  V extends TestAddon = TestAddon
> extends AbstractAddonManager<T, V> {
  public constructor() {
    super({ type: 'addon' } as T);
  }
}

//initializing

const resources: testAddonResources = {
  logFunction: console.log,
  warnFunction: console.warn,
  errorFunction: console.error,
};

const addon1 = new TestAddon1(resources);
addon1.setSettings({ ...addon1.getSettings(), logPrefix: 'MyFirstAddon =>' });

const addon2 = new TestAddon2(resources);
addon2.setSettings({ ...addon2.getSettings(), logPrefix: 'MySecondAddon =>' });

const addonManager = new TestAddonManager();

addonManager.on('add', (_, addon: TestAddon) =>
  console.log('added: ' + addon.getDetails().id)
);
addonManager.on('remove', (_, addon: TestAddon) =>
  console.log('removed: ' + addon.getDetails().id)
);

//adding addons
addonManager.add(addon1);
addonManager.add(addon2);

console.log('number of addons: ', addonManager.getAll().length);

//emit load

addonManager.getAll().forEach((addon) => addon.emit('load'));

//get by id

addonManager.getById('test-addon-1')?.log('get by id');
addonManager.getById('test-addon-2')?.log('get by id');

//change settings while loaded

addon1.setSettings({ ...addon1.getSettings(), logPrefix: '~~~~> ' });

//call function on all

addonManager.getAll().forEach((addon) => addon.log('action on all'));

//cant add an addon twice

addonManager.add(addon1);

//remove addon

const addonToRemove = addonManager.getById('test-addon-1');
if (addonToRemove) addonManager.remove(addonToRemove);

//call function on all

addonManager.getAll().forEach((addon) => addon.log('action on all 2'));
