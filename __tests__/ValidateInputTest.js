const App = require("../src/App");

describe("validateInput test", () => {
  const app = new App();

  test("올바른 입력값", () => {
    const inputs = ["146", "486", "569"];

    inputs.forEach((input) => {
      expect(app.validateInput(input)).toEqual(true);
    });
  });

  test("예외 테스트", () => {
    const inputs = ["111", "122", "131", "1", "1234", "1111", "err", "test"];

    inputs.forEach((input) => {
      expect(app.validateInput(input)).toEqual(false);
    });
  });
});
