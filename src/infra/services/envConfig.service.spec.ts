import { EnvConfigService } from "./envConfig.service";

const makeSut = () => {
  const sut = EnvConfigService;
  return { sut };
}

describe("EnvConfigService", () => {
  const { sut } = makeSut();
  sut.envPathConstruction('test')

  it("should instantiate EnvConfigService", () => {
    const { sut } = makeSut();
    expect(sut).toBeTruthy();
    expect(sut).toBeDefined();
  });

  it("should return a number", () => {
    const port = sut.getAppPort();
    expect(typeof port).toBe('number');
    expect(port).toBe(3006);
  });
})
