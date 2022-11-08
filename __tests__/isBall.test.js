const isBall = require("../src/isBall");

describe("볼 횟수 체크", () => {
  test("값이 있는지 확인", () => {
    expect(isBall([1, 2, 3], [1, 3, 2])).toBe(`2볼`);
  });
});
