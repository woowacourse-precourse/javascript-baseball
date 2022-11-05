
class ExceptionCheck {

  UserInputCheck(userInput) {
    if (userInput.length !== 3) {
      throw "3개의 숫자를 입력해주세요"
    }

    if (isNaN(userInput)) {
      throw "숫자만 입력해주세요"
    }

    if ([...new Set(userInput)].length !== userInput.length) {
      throw "중복된 숫자 안돼용"
    }

    if (userInput.includes('0')) {
      throw "1~9사이의 숫자만 입력해주세요"
    }
  }
}

module.exports = ExceptionCheck