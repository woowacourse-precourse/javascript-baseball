const {generateRandomNumber} = require("../util.js");

describe("컴퓨터 난수 생성 테스트", () => {
  let computerNumber;
  beforeEach(() => {
    computerNumber = generateRandomNumber();
  })
  test("배열의 길이가 3인지 검사", () => {
    expect(computerNumber).toHaveLength(3);
  });

  test("서로 다른 수 3개인지 검사", () => {
    const set = new Set(computerNumber);

    expect([...set]).toHaveLength(3);
  });
});
