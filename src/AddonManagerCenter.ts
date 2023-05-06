import { EventEmitter } from 'events';
import AbstractAddonManager from './AbstractAddonManager';
import AbstractAddon from './AbstractAddon';

export default class AddonManagerCenter extends EventEmitter {
  private managers: Array<AbstractAddonManager> = [];

  public constructor(...managers: Array<AbstractAddonManager>) {
    super();
    managers.forEach(this.addManager);
  }

  public getAllManagers() {
    return this.managers;
  }

  public getManagerIndex(manager: AbstractAddonManager) {
    return this.managers.findIndex(
      (storedManager) => manager === storedManager
    );
  }

  public haveManager(manager: AbstractAddonManager) {
    return this.getManagerIndex(manager) !== -1;
  }

  public haveManagerByType(type: string) {
    return !!this.getManagerByType(type);
  }

  public getManagerByType(type: string) {
    return this.managers.find((manager) => manager.getType() === type);
  }

  public addManager(manager: AbstractAddonManager) {
    //TODO: manage subtypes
    //ex: media-source.manga?
    //yes => add
    //no => media-source?
    //yes => add
    const result =
      !this.haveManager(manager) &&
      !this.haveManagerByType(manager.getType()) &&
      this.managers.push(manager);
    if (result) this.emit('addManager', this, manager);
    return result;
  }

  public removeManager(manager: AbstractAddonManager) {
    const result =
      this.haveManager(manager) &&
      this.managers.splice(this.getManagerIndex(manager), 1);
    if (result) this.emit('removeManager', this, manager);
    return result;
  }

  public haveCorrectType(addon: AbstractAddon) {
    return this.managers.some((manager) => manager.haveCorrectType(addon));
  }

  public haveById(id: string) {
    return !!this.getById(id);
  }

  public getById(id: string) {
    return this.managers.find((manager) => manager.haveById(id));
  }

  public add(addon: AbstractAddon) {
    let result =
      this.haveCorrectType(addon) &&
      !this.haveById(addon.getId()) &&
      !this.haveById(addon.getId());
    if (result) {
      const manager = this.managers.find((manager) =>
        manager.haveCorrectType(addon)
      );
      result = !!manager && manager.add(addon);
      if (result) this.emit('add', this, addon);
    }
    return result;
  }

  public remove(addon: AbstractAddon) {
    let result = this.haveById(addon.getId());
    if (result) {
      const manager = this.managers.find((manager) =>
        manager.haveById(addon.getId())
      );
      result = !!manager?.remove(addon);
      if (result) this.emit('remove', this, addon);
    }
    return result;
  }
}
