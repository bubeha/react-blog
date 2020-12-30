import Container from './Container';
import { ContainerInterface } from './ContainerInterface';

export default class DI {
  private static container: ContainerInterface = new Container();

  static register(key: string, dependency: unknown): void {
    DI.container.add(key, dependency);
  }

  static get<T extends unknown>(key: string): T {
    return DI.container.get(key);
  }
}
