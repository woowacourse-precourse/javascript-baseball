const App = require("../src/App");

describe("입력 A: 예외 처리 테스트", () => {
  test("공백만 입력되면 오류가 발생합니다", () => {
    const app = new App();
    expect(() => app.validateUserNum("  ")).toThrow("숫자를 입력해주세요");
  });
  test("문자를 입력하면 오류가 발생합니다", () => {
    const app = new App();
    expect(() => app.validateUserNum("가나다")).toThrow(
      "문자를 제외한 숫자만을 입력해주세요"
    );
    expect(() => app.validateUserNum("./.")).toThrow(
      "문자를 제외한 숫자만을 입력해주세요"
    );
  });
  test("3자리가 아닌 숫자를 입력하면 오류가 발생합니다", () => {
    const app = new App();
    expect(() => app.validateUserNum("01")).toThrow(
      "입력한 숫자가 3 자리가 아닙니다"
    );
    expect(() => app.validateUserNum("1 3")).toThrow(
      "입력한 숫자가 3 자리가 아닙니다"
    );
    expect(() => app.validateUserNum("5984")).toThrow(
      "입력한 숫자가 3 자리가 아닙니다"
    );
  });
  test("중복된 숫자를 입력하면 오류가 발생합니다.", () => {
    const app = new App();
    expect(() => app.validateUserNum("888")).toThrow(
      "입력한 숫자에 중복된 숫자가 존재합니다"
    );
    expect(() => app.validateUserNum("191")).toThrow(
      "입력한 숫자에 중복된 숫자가 존재합니다"
    );
  });
  test("공백은 제거하여 3 자리 숫자로 교체합니다", () => {
    const app = new App();
    expect(app.validateUserNum("1 3 9")).toBe("139");
  });
});
describe("입력 B: 예외 처리 테스트", () => {
  test("1이나 2 이외의 값을 입력하면 오류가 발생합니다", () => {
    const app = new App();
    expect(() => app.validateRestartNum("재시작")).toThrow(
      "1 과 2 중 하나를 입력해주세요"
    );
    expect(() => app.validateRestartNum("8")).toThrow(
      "1 과 2 중 하나를 입력해주세요"
    );
    expect(app.validateRestartNum(" 1 ")).toBe("1");
  });
});
