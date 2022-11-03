const setNumber = require("../src/setNumber");

describe("초기 3자리 숫자 세팅", () => {
  test("중복 체크", () => {
    expect(setNumber()).toEqual([1, 2, 3]);
  });
});
