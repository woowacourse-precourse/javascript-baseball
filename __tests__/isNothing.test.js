const isNothing = require("../src/isNothing");

describe("낫싱 횟수 체크", () => {
  test("값이 없는지 확인", () => {
    expect(isNothing([1, 2, 3], [4, 5, 2])).toBe("낫싱");
  });
});
