import { EventEmitter } from 'events';
import AbstractAddon from './AbstractAddon';

export default abstract class AbstractAddonManager extends EventEmitter {
  protected static type: string;

  private addons: Array<AbstractAddon> = [];

  public constructor(...addons: Array<AbstractAddon>) {
    super();
    addons.forEach(this.add);
  }

  public static getType() {
    return this.type;
  }

  public getType(): string {
    //@ts-ignore
    return this.constructor.getType();
  }

  public getAll() {
    return this.addons;
  }

  public haveCorrectType(addon: AbstractAddon) {
    return !this.getType() || this.getType() === addon.getType();
  }

  public getIndexById(id: string) {
    return this.addons.findIndex((addon) => addon.getId() === id);
  }

  public getById(id: string) {
    const index = this.getIndexById(id);
    if (index === -1) return null;
    return this.addons[index];
  }

  public haveById(id: string) {
    return this.getIndexById(id) !== -1;
  }

  public add(addon: AbstractAddon) {
    const result =
      this.haveCorrectType(addon) &&
      !this.haveById(addon.getId()) &&
      this.addons.push(addon);
    if (result) this.emit('add', this, addon);
    return !!result;
  }

  public remove(addon: AbstractAddon) {
    const result =
      this.haveById(addon.getId()) &&
      this.addons.splice(this.getIndexById(addon.getId()), 1);
    if (result) this.emit('remove', this, addon);
    return !!result;
  }

  /**
   * @deprecated
   * set the addon list without any check
   */
  public set(addons: Array<AbstractAddon>) {
    this.addons = addons;
  }
}
