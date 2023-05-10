import { EventEmitter } from 'events';
import {
  basicAddonDetails,
  basicAddonResources,
  basicAddonSettings,
} from './addonTypes';
import { optionDefinition } from './optionTypes';
import { optionUtils } from '.';

/**
 * @noInheritDoc
 */
export default abstract class AbstractAddon<
  T extends basicAddonDetails = basicAddonDetails,
  V extends basicAddonResources = basicAddonResources,
  X extends basicAddonSettings = basicAddonSettings
> extends EventEmitter {
  private details!: T;
  private settings!: X;
  private settingsDefinition!: optionDefinition<X>;

  public constructor(
    private resources: V,
    details?: T,
    settingsDefinition?: optionDefinition<X>
  ) {
    super();
    this.details = details as T;
    this.settingsDefinition = settingsDefinition as optionDefinition<X>;
    this.settings =
      this.settingsDefinition &&
      optionUtils.optionDefinitionToOption(this.settingsDefinition);
    this.on('install', this.onInstall);
    this.on('update', this.onUpdate);
    this.on('load', this.onLoad);
    this.on('unload', this.onUnload);
    this.on('uninstall', this.onUninstall);
  }

  public getDetails() {
    return this.details;
  }

  public getResources() {
    return this.resources;
  }

  public getSettingsDefinition() {
    return this.settingsDefinition;
  }

  public getSettings() {
    return this.settings;
  }

  public setSettings(settings: X) {
    this.settings = settings;
  }

  public abstract onInstall(): void;

  public abstract onUpdate(previous: AbstractAddon): void;

  public abstract onLoad(): void;

  public abstract onUnload(): void;

  public abstract onUninstall(): void;

  public log(...parameters: Array<any>) {
    this.emit('log', parameters);
  }

  public warn(...parameters: Array<any>) {
    this.emit('warn', parameters);
  }

  public error(...parameters: Array<any>) {
    this.emit('error', parameters);
  }
}
