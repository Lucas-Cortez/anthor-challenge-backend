import bcryptjs from "bcryptjs";

import { IHashProvider } from "../IHashProvider";

export class BCryptHashProvider implements IHashProvider {
  public async create(string: string): Promise<string> {
    return await bcryptjs.hash(string, 16);
  }
}
