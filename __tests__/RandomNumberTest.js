const BaseballMaker = require("../src/Model/BaseballMaker");

describe("컴퓨터의 수가 유효한지 검사", () => {
    test("서로 중복되지 않아야 한다..", () => {
    const input = BaseballMaker.getRandomNumber();
    const randomNumber = new Set(input);

    expect(input.length === randomNumber.size).toBeTruthy();
  });

    test("0이 들어가지 않아야 한다.", () => {
    const input = BaseballMaker.getRandomNumber();
    
    expect(input).not.toContain(0);
  });

    test("세자리 수여야 한다.", () => {
    const input = BaseballMaker.getRandomNumber();
    
    expect(input).toHaveLength(3);
  });
  
});