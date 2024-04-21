import { EnvConfigService } from "./envConfig.service";

const makeSut = () => {
  const sut = EnvConfigService;
  return { sut };
}

describe("EnvConfigService", () => {
  it("should instantiate EnvConfigService", () => {
    const { sut } = makeSut();
    expect(sut).toBeTruthy();
    expect(sut).toBeDefined();
  });
})
