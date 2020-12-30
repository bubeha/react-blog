import { ContainerInterface } from './ContainerInterface';

export interface ConfigEntry {
  key: string;
  dependency: (container: ContainerInterface) => unknown;
}
