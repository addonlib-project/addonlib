import { EventEmitter } from 'events';
import AbstractAddon from './AbstractAddon';
import { basicAddonManagerDetails } from './addonManagerTypes';

/**
 * Manage and store addons.
 *
 * @noInheritDoc
 */
export default abstract class AbstractAddonManager<
  T extends basicAddonManagerDetails = basicAddonManagerDetails,
  V extends AbstractAddon = AbstractAddon
> extends EventEmitter {
  private addons: Array<V> = [];

  private details!: T;

  public constructor(details?: T) {
    super();
    this.details = details as T;
  }

  public getDetails(): T {
    return this.details;
  }

  public getAll() {
    return this.addons;
  }

  public haveCorrectType(addon: V) {
    return (
      !this.getDetails().type ||
      this.getDetails().type === addon.getDetails().type
    );
  }

  public getIndexById(id: string) {
    return this.addons.findIndex((addon) => addon.getDetails().id === id);
  }

  public getById(id: string) {
    const index = this.getIndexById(id);
    if (index === -1) return null;
    return this.addons[index];
  }

  public haveById(id: string) {
    return this.getIndexById(id) !== -1;
  }

  /**
   * @param addon should have the correct type and no addon with the same id should already exists.
   * @returns true if correctly added.
   */
  public add(addon: V) {
    const result =
      this.haveCorrectType(addon) &&
      !this.haveById(addon.getDetails().id) &&
      this.addons.push(addon);
    if (result) this.emit('add', this, addon);
    return !!result;
  }

  /**
   * @param addon should exists in the manager.
   * @returns true if correctly removed.
   */
  public remove(addon: V) {
    const result =
      this.haveById(addon.getDetails().id) &&
      this.addons.splice(this.getIndexById(addon.getDetails().id), 1);
    if (result) this.emit('remove', this, addon);
    return !!result;
  }

  /**
   * @deprecated
   * Set the addon list without any check.
   */
  public set(addons: Array<V>) {
    this.addons = addons;
  }
}
