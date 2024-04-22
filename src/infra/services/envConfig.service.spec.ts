import path from "path";
import dotenv from "dotenv";
import { EnvConfigService } from "./envConfig.service";

const makeSut = () => {
  const sut = EnvConfigService;
  return { sut };
}

describe("EnvConfigService", () => {
  const { sut } = makeSut();
  sut.envPathConstruction('test');

  it("should instantiate EnvConfigService", () => {
    const { sut } = makeSut();
    expect(sut).toBeTruthy();
    expect(sut).toBeDefined();
  });

  it("should return a dotenv object", () => {
    const env = sut.envPathConstruction('test');
    expect(env).toBeTruthy();
    expect(env).toBeDefined();
  });

  it("should return correct path for default environment", () => {
    const expectedPath = path.join(__dirname, `../../../.env`);
    const environment = sut.envPathConstruction();
    expect(environment).toEqual(dotenv.config({ path: expectedPath }));
  });

  it("should return a number", () => {
    const port = sut.getAppPort();
    expect(typeof port).toBe('number');
    expect(port).toBe(3006);
  });
})
