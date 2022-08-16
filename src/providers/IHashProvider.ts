export interface IHashProvider {
  create(string: string): Promise<string>;
}
