const utilFun = require("../src/utils/utils");

describe("유저 입력값 validation", () => {
  test("받은 값이 올바른 값인지", () => {
    const userInput = ["107", "5732", "ad2", "112", "a"];

    const errorMessage = [
      "1부터 9사이의 정수를 입력해 주세요.",
      "세자리 숫자를 입력해주세요!",
      "숫자를 제외한 문자를 입력하셨습니다",
      "서로 다른 세 숫자를 입력해주세요!",
      "숫자를 제외한 문자를 입력하셨습니다",
    ];
    for (i = 0; i < userInput.length; i++) {
      expect(() => utilFun.checkUserValid(userInput[i])).toThrow(
        errorMessage[i]
      );
    }
  });
});
