const App = require("../src/App");

describe("숫자 야구 게임", () => {
  test("1-9까지 서로 다른 임의의 수 3개 생성", () => {
    const app = new App();
    const randoms = app.generateRandomNums(1, 9, 3);
    const set = new Set(randoms);
    expect(randoms.length).toEqual(3);
    expect(set.size).toEqual(3);
    expect(randoms.includes(0)).toEqual(false);
  });
});