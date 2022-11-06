const initNumber = require("../src/initNumber");

describe("초기 3자리 숫자 세팅", () => {
  const init = initNumber();
  const range = 3;
  test("길이가 3인지 확인", () => {
    expect(init.length).toBe(3);
  });
});
