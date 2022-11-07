const App = require("../src/App");
describe("스트라이크, 볼 카운터", () => {
  test("3스트라이트", () => {
    const app = new App();

    expect(app.strikeCounter(["1", "2", "3"], "123")).toEqual({
      ball: 0,
      strike: 3,
    });
  });
  test("3볼 0스트라이크", () => {
    const app = new App();
    expect(app.strikeCounter(["1", "2", "3"], "312")).toEqual({
      ball: 3,
      strike: 0,
    });
  });
  test("0볼 0스트라이트", () => {
    const app = new App();
    expect(app.strikeCounter(["1", "2", "3"], "456")).toEqual({
      ball: 0,
      strike: 0,
    });
  });
});
