import { EventEmitter } from 'events';
import {
  basicAddonDetails,
  basicAddonResources,
  basicAddonSettings,
} from './addonTypes';
import { optionDefinition } from './optionTypes';
import * as optionUtils from './utils/optionUtils';

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

  /**
   * **DO NOT EXECUTE ANY ACTION IN THE CONSTRUCTOR**
   *
   * please use the on(Install, Update, Load, Unload, Uninstall) instead.
   *
   * @param resources resources needed by the addon (ex: instances)
   * @param details
   * @param settingsDefinition
   */
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

  /**
   * Sould be triggered on the first installation of the addon.
   */
  public abstract onInstall(): void;

  /**
   * Sould be triggered when installing over and replacing a previous version of the addon.
   */
  public abstract onUpdate(previous: AbstractAddon): void;

  /**
   * Sould be triggered when enabling the addon (most likely the place where you want to do your stuff).
   */
  public abstract onLoad(): void;

  /**
   * Should be triggered when disabling the addon.
   *
   * **YOU SHOULD STOP ANY RUNNING PROCESS AND CANCEL ANY TEMPORARY CHANGES YOUR ADDON MADE**
   */
  public abstract onUnload(): void;

  /**
   * Should be triggered when uninstalling the addon.
   *
   * **NO TRACE OF THE ADDON OR RUNNING PROCESS SHOULD BE LEFT**
   */
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
