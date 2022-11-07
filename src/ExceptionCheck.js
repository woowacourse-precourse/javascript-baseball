class ExceptionCheck {

  UserInputCheck(userInput) {
    if (userInput.length !== 3) {
      throw new Error("3개의 숫자를 입력해주세요");
    }

    if (isNaN(userInput)) {
      throw new Error("숫자만 입력해주세요");
    }

    if ([...new Set(userInput)].length !== userInput.length) {
      throw new Error("중복된 숫자 안돼용");
    }

    if (userInput.includes('0')) {
      throw new Error("1~9사이의 숫자만 입력해주세요");
    }
  }

  /// 1, 2 에 대한 예외처리도 여기로
}

module.exports = ExceptionCheck;