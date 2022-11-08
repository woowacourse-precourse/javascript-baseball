const GameManager = require("../src/GameManager");

const gameManager = new GameManager();

describe("gameManager 단위테스트", () => {
  test("getStrikeBallCount 함수 테스트", () => {
    let score = gameManager.getStrikeBallCount([1, 2, 3], [4, 5, 6]);
    expect(score.strikeCount).toEqual(0);
    expect(score.ballCount).toEqual(0);
    score = gameManager.getStrikeBallCount([1, 2, 3], [1, 3, 2]);
    expect(score.strikeCount).toEqual(1);
    expect(score.ballCount).toEqual(2);
  });

  test("getResult 함수 테스트", () => {
    let result = gameManager.getResult(0, 3);
    expect(result).toEqual(false);
    result = gameManager.getResult(3, 0);
    expect(result).toEqual(true);
  });

  test("apply 함수 테스트", () => {
    let result = gameManager.apply([1, 2, 3], [1, 2, 3]);
    expect(result).toEqual(true);
    result = gameManager.apply([4, 5, 6], [6, 5, 4]);
    expect(result).toEqual(false);
  });
});
