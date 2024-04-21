import { EnvConfigService } from "../services/envConfig.service";

const makeEnvConfigGlobal = () => {
  EnvConfigService.envPathConstruction('development');
  return EnvConfigService;
}

export { makeEnvConfigGlobal }
