import AbstractAddon from '../src/AbstractAddon';
import { Mock, UnknownFunction, fn } from 'jest-mock';

describe('should emit when logging', () => {
  let addon: AbstractAddon;
  beforeAll(() => {
    class AddonExample1 extends AbstractAddon {
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
    addon = new AddonExample1({});
  });

  test('should emit log when calling log', (done) => {
    addon.once('log', () => done());
    addon.log();
  });

  test('should emit warn when calling warn', (done) => {
    addon.once('warn', () => done());
    addon.warn();
  });

  test('should emit error when calling error', (done) => {
    addon.once('error', () => done());
    addon.error();
  });
});

describe('should have corresponding static and instance field', () => {
  class AddonExample1 extends AbstractAddon {
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
    static id = 'id';
    static title = 'title';
    static type = 'addon';
    static version = '0.0.1';
    static apiVersion = '0.0.2';
    static authors = ['okise'];
    static description = 'description';
    static tags = ['tag1'];
    static dependencies = ['dependency1'];
  }

  let addon: AbstractAddon;
  beforeAll(() => {
    addon = new AddonExample1({});
  });

  test('should have corresponding id field', () => {
    expect(AddonExample1.getId()).toBe(AddonExample1.id);
    expect(addon.getId()).toBe(AddonExample1.id);
  });

  test('should have corresponding title field', () => {
    expect(AddonExample1.getTitle()).toBe(AddonExample1.title);
    expect(addon.getTitle()).toBe(AddonExample1.title);
  });

  test('should have corresponding type field', () => {
    expect(AddonExample1.getType()).toBe(AddonExample1.type);
    expect(addon.getType()).toBe(AddonExample1.type);
  });

  test('should have corresponding version field', () => {
    expect(AddonExample1.getVersion()).toBe(AddonExample1.version);
    expect(addon.getVersion()).toBe(AddonExample1.version);
  });

  test('should have corresponding apiVersion field', () => {
    expect(AddonExample1.getApiVersion()).toBe(AddonExample1.apiVersion);
    expect(addon.getApiVersion()).toBe(AddonExample1.apiVersion);
  });

  test('should have corresponding author field', () => {
    expect(AddonExample1.getAuthors()).toBe(AddonExample1.authors);
    expect(addon.getAuthors()).toBe(AddonExample1.authors);
  });

  test('should have corresponding description field', () => {
    expect(AddonExample1.getDescription()).toBe(AddonExample1.description);
    expect(addon.getDescription()).toBe(AddonExample1.description);
  });

  test('should have corresponding tags field', () => {
    expect(AddonExample1.getTags()).toBe(AddonExample1.tags);
    expect(addon.getTags()).toBe(AddonExample1.tags);
  });

  test('should have corresponding dependencies field', () => {
    expect(AddonExample1.getDependencies()).toBe(AddonExample1.dependencies);
    expect(addon.getDependencies()).toBe(AddonExample1.dependencies);
  });
});

describe('should call subscribed methods when emitting', () => {
  let addon: AbstractAddon;
  let mockedOnInstall: Mock<UnknownFunction>;
  let mockedOnUpdate: Mock<UnknownFunction>;
  let mockedOnLoad: Mock<UnknownFunction>;
  let mockedOnUnload: Mock<UnknownFunction>;
  let mockedOnUninstall: Mock<UnknownFunction>;
  beforeAll(() => {
    mockedOnInstall = fn();
    mockedOnUpdate = fn();
    mockedOnLoad = fn();
    mockedOnUnload = fn();
    mockedOnUninstall = fn();
    class AddonExample1 extends AbstractAddon {
      onInstall() {
        mockedOnInstall();
      }

      onUpdate(previous: AbstractAddon) {
        mockedOnUpdate(previous);
      }

      onLoad() {
        mockedOnLoad();
      }

      onUnload() {
        mockedOnUnload();
      }

      onUninstall() {
        mockedOnUninstall();
      }
    }
    addon = new AddonExample1({});
  });

  test('should call onInstall when emitting onInstall', (done) => {
    mockedOnInstall.withImplementation(
      () => {},
      () => done()
    );
    addon.emit('onInstall');
  });

  test('should call onUpdate when emitting onUpdate', (done) => {
    const prev = 'prev';
    mockedOnUpdate.withImplementation(
      //@ts-ignore
      (previous) => {
        expect(previous).toBe(prev);
      },
      () => {
        done();
      }
    );
    addon.emit('onUpdate', prev);
  });

  test('should call onLoad when emitting onLoad', (done) => {
    mockedOnLoad.withImplementation(
      () => {},
      () => done()
    );
    addon.emit('onLoad');
  });

  test('should call onUnload when emitting onUnload', (done) => {
    mockedOnUnload.withImplementation(
      () => {},
      () => done()
    );
    addon.emit('onUnload');
  });

  test('should call onUninstall when emitting onUninstall', (done) => {
    mockedOnUninstall.withImplementation(
      () => {},
      () => done()
    );
    addon.emit('onUninstall');
  });
});
