const isStrike = require("../src/isStrike");

describe("스트라이크 횟수 체크", () => {
  test("값이 같은 자리에 있는지 확인", () => {
    expect(isStrike([1, 2, 3], [2, 1, 3])).toBe(`1스트라이크`);
  });
});
