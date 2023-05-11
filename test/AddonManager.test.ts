import AbstractAddon from '../src/AbstractAddon';
import AbstractAddonManager from '../src/AbstractAddonManager';
import { basicAddonDetails } from '../src/addonTypes';

class AddonManager1 extends AbstractAddonManager {
  static type = 'addon';
}

class Addon1 extends AbstractAddon {
  public onInstall(): void {
    throw new Error('Method not implemented.');
  }
  public onUpdate(previous: AbstractAddon): void {
    throw new Error('Method not implemented.');
  }
  public onLoad(): void {
    throw new Error('Method not implemented.');
  }
  public onUnload(): void {
    throw new Error('Method not implemented.');
  }
  public onUninstall(): void {
    throw new Error('Method not implemented.');
  }
}

class Addon2 extends AbstractAddon {
  public onInstall(): void {
    throw new Error('Method not implemented.');
  }
  public onUpdate(previous: AbstractAddon): void {
    throw new Error('Method not implemented.');
  }
  public onLoad(): void {
    throw new Error('Method not implemented.');
  }
  public onUnload(): void {
    throw new Error('Method not implemented.');
  }
  public onUninstall(): void {
    throw new Error('Method not implemented.');
  }
}

let addon2: AbstractAddon;
let addon1: AbstractAddon;
let addonManager: AbstractAddonManager;
beforeAll(() => {
  addon1 = new Addon1(
    {},
    { id: 'addon1', type: 'addon' } as basicAddonDetails,
    {}
  );
  addon2 = new Addon2(
    {},
    { id: 'addon2', type: 'other' } as basicAddonDetails,
    {}
  );
  addonManager = new AddonManager1({ type: 'addon' });
});

describe('correctType', () => {
  test('should have the correct type', () => {
    expect(addonManager.haveCorrectType(addon1)).toBeTruthy();
  });

  test('should not have the correct type', () => {
    expect(addonManager.haveCorrectType(addon2)).toBeFalsy();
  });
});

describe('getIndexById', () => {
  test('should have the correct order', () => {
    addonManager.set([addon1, addon2]);
    expect(addonManager.getIndexById(addon1.getDetails().id)).toBe(0);
    expect(addonManager.getIndexById(addon2.getDetails().id)).toBe(1);
  });

  afterEach(() => {
    addonManager.set([]);
  });
});

describe('getById', () => {
  test('should have the correct addons', () => {
    addonManager.set([addon1, addon2]);
    expect(addonManager.getById(addon1.getDetails().id)).toBe(addon1);
    expect(addonManager.getById(addon2.getDetails().id)).toBe(addon2);
    expect(addonManager.getById('xxxxxxxxxxxx')).toBeNull();
  });

  afterEach(() => {
    addonManager.set([]);
  });
});

describe('haveById', () => {
  test('should have the correct returns', () => {
    addonManager.set([addon1, addon2]);
    expect(addonManager.haveById(addon1.getDetails().id)).toBeTruthy();
    expect(addonManager.haveById(addon2.getDetails().id)).toBeTruthy();
    expect(addonManager.haveById('xxxxxxxxxxxx')).toBeFalsy();
  });

  afterEach(() => {
    addonManager.set([]);
  });
});

describe('add', () => {
  test('should not add if incorrect type', () => {
    expect(addonManager.add(addon2)).toBeFalsy();
    expect(addonManager.getAll()).toHaveLength(0);
  });

  test('should not add if id already exists', () => {
    addonManager.set([addon1]);
    expect(addonManager.add(addon1)).toBeFalsy();
    expect(addonManager.getAll()).toHaveLength(1);
  });

  test('should add if everything is ok', () => {
    expect(addonManager.add(addon1)).toBeTruthy();
    expect(addonManager.getAll()).toHaveLength(1);
  });

  test('should emit if correctly added', (done) => {
    addonManager.once('add', () => done());
    expect(addonManager.add(addon1)).toBeTruthy();
    expect(addonManager.getAll()).toHaveLength(1);
  });

  test('should not emit if not correctly added', (done) => {
    addonManager.once('add', () => done('error'));
    expect(addonManager.add(addon2)).toBeFalsy();
    expect(addonManager.getAll()).toHaveLength(0);
    done();
  });

  afterEach(() => {
    addonManager.set([]);
  });
});

describe('remove', () => {
  test('should not remove if id does not exists', () => {
    expect(addonManager.remove(addon1)).toBeFalsy();
  });

  test('should remove if everything is ok', () => {
    addonManager.set([addon1]);
    expect(addonManager.remove(addon1)).toBeTruthy();
    expect(addonManager.getAll()).toHaveLength(0);
  });

  test('should emit if correctly removed', (done) => {
    addonManager.once('remove', () => done());
    addonManager.set([addon1]);
    expect(addonManager.remove(addon1)).toBeTruthy();
    expect(addonManager.getAll()).toHaveLength(0);
  });

  test('should not emit if not correctly removed', (done) => {
    addonManager.once('remove', () => done('error'));
    expect(addonManager.remove(addon1)).toBeFalsy();
    done();
  });

  afterEach(() => {
    addonManager.set([]);
  });
});
