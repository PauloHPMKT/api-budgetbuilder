import * as dotenv from 'dotenv';
import { join } from 'node:path';

export class EnvConfigService {
  public static envPathConstruction(environment?: string) {
    const envFile = !environment ? 'env' : `env.${environment}`;
    return dotenv.config({
      path: join(__dirname, `../../../.${envFile}`),
    })
  }

  public static getAppPort(): number {
    return Number(process.env.PORT);
  }
}
