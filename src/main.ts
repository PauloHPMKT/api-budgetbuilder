import { makeEnvConfigGlobal } from "./infra/globals/intanceEnv";
import { App } from "./presentation/App";

const envConfigService = makeEnvConfigGlobal();
const port = envConfigService.getAppPort();

const app = new App();
app.listen(port);
