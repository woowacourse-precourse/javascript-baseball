const { strikeCalculation, ballCalculation } = require("../src/gameFunctions");

describe("스트라이크의 개수가 올바르게 나오는 지 테스트", () => {
  test("같은 자리의 개수가 3개일 때", () => {
    expect(strikeCalculation([1, 2, 3], [1, 2, 3])).toEqual(3);
  });
  test("같은 자리의 개수가 2개일 때", () => {
    expect(strikeCalculation([3, 2, 4], [5, 2, 4])).toEqual(2);
  });
  test("같은 자리의 개수가 1개일 때", () => {
    expect(strikeCalculation([1, 6, 9], [2, 6, 1])).toEqual(1);
  });
  test("같은 자리의 개수가 0개일 때", () => {
    expect(strikeCalculation([1, 6, 9], [2, 8, 1])).toEqual(0);
  });
});

describe("볼의 개수가 올바르게 나오는 지 테스트", () => {
  test("같은 자리의 개수가 0개일 때", () => {
    expect(ballCalculation([1, 2, 3], [1, 2, 3])).toEqual(0);
  });
  test("같은 자리의 개수가 1개일 때", () => {
    expect(ballCalculation([2, 6, 3], [5, 2, 4])).toEqual(1);
  });
  test("같은 자리의 개수가 2개일 때", () => {
    expect(ballCalculation([1, 8, 6], [2, 6, 1])).toEqual(2);
  });
  test("같은 자리의 개수가 3개일 때", () => {
    expect(ballCalculation([1, 6, 9], [9, 1, 6])).toEqual(3);
  });
});
