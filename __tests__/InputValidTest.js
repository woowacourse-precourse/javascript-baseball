const BaseballGame = require("../src/BaseballGame");

describe("입력값 유효 체크 테스트", () => {
  // TODO: 게임 종료 후 입력값 유효 테스트 추가하기
  test("입력값이 유효한 값인지", () => {
    const game = new BaseballGame();
    const testWordsForInvalid = ["1234", "122", "12d"];
    testWordsForInvalid.forEach((testWord) => {
      expect(game.getIsInputValueValid(testWord)).toEqual(false);
    });
    expect(game.getIsInputValueValid("123")).toEqual(true);
  });
});
