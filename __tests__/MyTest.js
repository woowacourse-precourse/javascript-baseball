const { isBall, isStrike } = require("../src/Referee");

describe("Referee Test", () => {
  test("다른 자리에 있는 숫자의 수를 세야한다.", () => {
    const answer = [1, 2, 3];
    const input = [3, 5, 1];
    
    expect(
      isBall(answer, input)
    ).toEqual(2);
  });

  test("겹치는 수가 없는 경우 0을 반환한다.", () => {
    const answer = [1, 2, 3];
    const input = [4, 5, 6];
    
    expect(
      isBall(answer, input)
    ).toEqual(0);
  });

  test("isStrike: 같은 수가 같은 자리에 있으면 스트라이크", () => {
    const answer = [1, 2, 3];
    const input = [1, 5, 6];
    
    expect(
      isStrike(answer, input)
    ).toEqual(1);
  });
});
