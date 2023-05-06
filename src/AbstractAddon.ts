import { EventEmitter } from 'events';
import { addonResourcesType } from './addonResourcesType';

export default abstract class AbstractAddon extends EventEmitter {
  protected static id: string;
  protected static title: string;
  protected static type: string = 'addon';
  protected static version: string;
  protected static apiVersion: string;
  protected static authors: Array<string> = [];
  protected static description: string;
  protected static tags: Array<string> = [];
  protected static dependencies: Array<string> = [];

  /** */
  private resources;

  public constructor(resources: addonResourcesType = {}) {
    super();
    this.resources = resources;
    this.on('install', this.onInstall);
    this.on('update', this.onUpdate);
    this.on('load', this.onLoad);
    this.on('unload', this.onUnload);
    this.on('uninstall', this.onUninstall);
  }

  public static getId() {
    return this.id;
  }

  public static getTitle() {
    return this.title;
  }

  public static getType() {
    return this.type;
  }

  public static getVersion() {
    return this.version;
  }

  public static getApiVersion() {
    return this.apiVersion;
  }

  public static getAuthors() {
    return this.authors;
  }

  public static getDescription() {
    return this.description;
  }

  static getTags() {
    return this.tags;
  }

  public static getDependencies() {
    return this.dependencies;
  }

  public getId(): string {
    //@ts-ignore
    return this.constructor.getId();
  }

  public getTitle(): string {
    //@ts-ignore
    return this.constructor.getTitle();
  }

  public getType(): string {
    //@ts-ignore
    return this.constructor.getType();
  }

  public getVersion(): string {
    //@ts-ignore
    return this.constructor.getVersion();
  }

  public getApiVersion(): string {
    //@ts-ignore
    return this.constructor.getApiVersion();
  }

  public getAuthors(): Array<string> {
    //@ts-ignore
    return this.constructor.getAuthors();
  }

  public getDescription(): string {
    //@ts-ignore
    return this.constructor.getDescription();
  }

  public getTags(): Array<string> {
    //@ts-ignore
    return this.constructor.getTags();
  }

  public getDependencies(): Array<string> {
    //@ts-ignore
    return this.constructor.getDependencies();
  }

  public getResources() {
    return this.resources;
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
