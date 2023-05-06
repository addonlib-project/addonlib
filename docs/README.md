@addonlib/addonlib / [Exports](modules.md)

# Addonlib

# [General informations](../README.md)

# [Documentation](modules.md)

# Exemples

Create an `Addon`

**All lasting changes that are made in the loading phase and during the execution of the plugin MUST be reverted when unloaded!**

```ts
import { AbstractAddon, addonResourcesType } from '@addonlib/addonlib';

export default class StyleAddon extends AbstractAddon {
  protected static type = 'style';

  constructor(instances: addonResourcesType) {
    super(instances);
  }

  public onInstall(): void {
    this.log('installed!');
  }

  public onUpdate(previous: AbstractAddon): void {}

  public onLoad(): void {
    this.log('loaded!');
    this.instances?.client.style.add('background', 'red');
  }

  public onUnload(): void {
    this.log('unloaded!');
    this.instances?.client.style.remove('background');
  }

  public onUninstall(): void {}
}
```

Create an `AddonManager` that only accept certain types of addons

```ts
import { AbstractAddon, AbstractAddonManager } from '@addonlib/addonlib';

export default class AddonStyleManager extends AbstractAddonManager {
  // use sub-types with the `.` delimiter (ex: `plugin.style`)
  protected static type = 'style';

  public constructor(...sourcesAddons: Array<AbstractAddon>) {
    super(...sourcesAddons);
  }
}

const addonStyleManager = new AddonStyleManager();

addonStyleManager.on('add', (manager, addon) =>
  console.log(`addon ${addon.getTitle()} added!`)
);

const styleAddonA = new StyleAddon();

addonStyleManager.add(styleAddonA);
```

Create an `AddonManagerCenter` that regroup your different type of `Addon`s and `AddonManager`s

```ts
import {
  AbstractAddon,
  AbstractAddonManager,
  AddonManagerCenter,
} from '@addonlib/addonlib';

const styleAddonA = new StyleAddon();
const styleAddonB = new StyleAddon();

const musicAddonA = new MusicAddon();
const musicAddonB = new MusicAddon();

const addons = [styleAddonA, styleAddonB, musicAddonA, musicAddonB];

const styleAddonManager = new StyleAddonManager();
const musicAddonManager = new MusicAddonManager();

const addonManagerCenter = new AddonManagerCenter(
  styleAddonManager,
  musicAddonManager
);

addonManagerCenter.on('add', (center, addon) =>
  console.log(`addon ${addon.getTitle()} added!`)
);

addons.forEach((addon) => addonManagerCenter.add(addon));
```