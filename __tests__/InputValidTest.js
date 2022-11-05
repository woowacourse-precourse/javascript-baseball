const getIsInputValueValid = require("../src/ValidCheck");

describe("입력값 유효 체크 테스트", () => {
  // TODO: 게임 종료 후 입력값 유효 테스트 추가하기
  test("입력값이 유효한 값이 아니라면 false가 리턴된다.", () => {
    const testWordsForInvalid = ["1234", "122", "12d"];
    testWordsForInvalid.forEach((testWord) => {
      expect(getIsInputValueValid(testWord)).toEqual(false);
    });
    expect(getIsInputValueValid("123")).toEqual(true);
  });

  test;
});
