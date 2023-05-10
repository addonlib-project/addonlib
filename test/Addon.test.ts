import AbstractAddon from '../src/AbstractAddon';
import { Mock, UnknownFunction, fn } from 'jest-mock';
import { basicAddonDetails } from '../src/addonTypes';

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
    addon = new AddonExample1({}, {} as basicAddonDetails, {});
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
    addon = new AddonExample1({}, {} as basicAddonDetails, {});
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
