const Counter = require("../src/Counter");

describe("볼과 스트라이크 개수를 구하는 class Counter 테스트", () => {
  test("0스트라이크 1볼", () => {
    const count = new Counter();
    const computerNums = '123';
    const userInput = '345';
    const ballCount = count.ball(userInput, computerNums);
    const strikeCount = count.strike(userInput, computerNums);
    expect([strikeCount, ballCount]).toEqual([0, 1]);
  });

  test("0스트라이크 2볼", () => {
    const count = new Counter();
    const computerNums = '123';
    const userInput = '352';
    const ballCount = count.ball(userInput, computerNums);
    const strikeCount = count.strike(userInput, computerNums);
    expect([strikeCount, ballCount]).toEqual([0, 2]);
  });

  test("0스트라이크 3볼", () => {
    const count = new Counter();
    const computerNums = '123';
    const userInput = '312';
    const ballCount = count.ball(userInput, computerNums);
    const strikeCount = count.strike(userInput, computerNums);
    expect([strikeCount, ballCount]).toEqual([0, 3]);
  });
});