import { ContainerInterface } from './ContainerInterface';

export default class Container implements ContainerInterface {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  private properties: { [key: string]: any } = {};

  add(key: string, dependency: unknown): void {
    if (dependency instanceof Function) {
      this.properties[key] = dependency(this);

      return;
    }

    this.properties[key] = dependency;
  }

  get<T = unknown>(key: string): T {
    return this.properties[key];
  }

  has(key: string): boolean {
    return !!this.properties[key];
  }
}
