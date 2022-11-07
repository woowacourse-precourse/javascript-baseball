const App = require("../src/App");

describe("입력값 테스트", () => {
  test("012 입력시 (1~9가 아닐 때)", () => {
    const app = new App();
    expect(app.play()).toBe(
      "1~9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요."
    );
  });
  test("1234 입력시 (3개의 수로 이루어 지지 않을 때)", () => {
    const app = new App();
    expect(app.play()).toBe(
      "1~9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요."
    );
  });
  test("112 입력시 (중복된 수가 있을 떄)", () => {
    const app = new App();
    expect(app.play()).toBe(
      "1~9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요."
    );
  });
});
