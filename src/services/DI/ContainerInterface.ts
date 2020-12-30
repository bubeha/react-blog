export interface ContainerInterface {
  get<T = unknown>(key: string): T;

  has(key: string): boolean;

  add(key: string, dependency: unknown): void;
}
