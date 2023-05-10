import { EventEmitter } from 'events';
import AbstractAddonManager from './AbstractAddonManager';
import AbstractAddon from './AbstractAddon';
import { basicAddonManagerCenterDetails } from './addonManagerCenterTypes';

/**
 * @noInheritDoc
 */
export default class AddonManagerCenter<
  T extends basicAddonManagerCenterDetails = basicAddonManagerCenterDetails,
  V extends AbstractAddonManager = AbstractAddonManager,
  X extends AbstractAddon = AbstractAddon
> extends EventEmitter {
  private managers: Array<V> = [];

  private details!: T;

  public constructor(managers: Array<V>, details: T) {
    super();
    this.details = details as T;
    managers.forEach(this.addManager);
  }

  public getDetails() {
    return this.details;
  }

  public getAllManagers() {
    return this.managers;
  }

  public getManagerIndex(manager: V) {
    return this.managers.findIndex(
      (storedManager) => manager === storedManager
    );
  }

  public haveManager(manager: V) {
    return this.getManagerIndex(manager) !== -1;
  }

  public haveManagerByType(type: string) {
    return !!this.getManagerByType(type);
  }

  public getManagerByType(type: string) {
    return this.managers.find((manager) => manager.getDetails().type === type);
  }

  public addManager(manager: V) {
    //TODO: manage subtypes
    //ex: media-source.manga?
    //yes => add
    //no => media-source?
    //yes => add
    const result =
      !this.haveManager(manager) &&
      !this.haveManagerByType(manager.getDetails().type) &&
      this.managers.push(manager);
    if (result) this.emit('addManager', this, manager);
    return result;
  }

  public removeManager(manager: V) {
    const result =
      this.haveManager(manager) &&
      this.managers.splice(this.getManagerIndex(manager), 1);
    if (result) this.emit('removeManager', this, manager);
    return result;
  }

  public haveCorrectType(addon: X) {
    return this.managers.some((manager) => manager.haveCorrectType(addon));
  }

  public haveById(id: string) {
    return !!this.getById(id);
  }

  public getById(id: string) {
    return this.managers.find((manager) => manager.haveById(id));
  }

  public add(addon: X) {
    let result =
      this.haveCorrectType(addon) &&
      !this.haveById(addon.getDetails().id) &&
      !this.haveById(addon.getDetails().id);
    if (result) {
      const manager = this.managers.find((manager) =>
        manager.haveCorrectType(addon)
      );
      result = !!manager && manager.add(addon);
      if (result) this.emit('add', this, addon);
    }
    return result;
  }

  public remove(addon: X) {
    let result = this.haveById(addon.getDetails().id);
    if (result) {
      const manager = this.managers.find((manager) =>
        manager.haveById(addon.getDetails().id)
      );
      result = !!manager?.remove(addon);
      if (result) this.emit('remove', this, addon);
    }
    return result;
  }
}
