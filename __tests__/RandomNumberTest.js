const RandomNumber = require("../src/RandomNumber.js");

// given
const number = new RandomNumber();
// when
const random = number.generateAnswerNumbers();

describe("랜덤 숫자 뽑기 단위 테스트", () => {
  test("1~9사이의 숫자 테스트", () => {
    // then
    random.forEach((num) => {
      expect(num).toBeGreaterThan(0);
      expect(num).toBeLessThan(10);
    });
  });
});
