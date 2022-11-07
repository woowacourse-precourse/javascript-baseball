import App from "../src/App";

describe("기능 테스트", () => {
  test("예외 처리 테스트", () => {
    expect(() => {
      const app = new App();
      app.checkUserGameAnswer();
    }).toThrow();
  });
});
