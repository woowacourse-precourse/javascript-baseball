const Computer = require("./Computer");

describe("컴퓨터", () => {
  test("중복없는 3자리 랜덤 숫자 생성", () => {
    const computer = new Computer();
    const notDuplicated = new Set(computer.getRandomThreeDigitNumber());

    expect(notDuplicated.size).toBe(3);
    expect([...notDuplicated].join("")).toMatch(/[1-9][1-9][1-9]/);
  });
});
