const { generateRandomDigit } = require("../src/App");

describe("1자리 랜덤 숫자 발생", () => {
  test("1자리 랜덤 숫자 발생", () => {
    expect(generateRandomDigit()).toBeTruthy();
  });
});
