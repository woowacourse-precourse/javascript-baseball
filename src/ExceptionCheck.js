const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("./Condition");

class ExceptionCheck {

  userInputCheck(userInput) {
    if (userInput.length !== COMPUTER_NUM_LENGTH) {
      throw new Error("3개의 숫자를 입력해주세요");
    }

    if (isNaN(userInput)) {
      throw new Error("숫자만 입력해주세요");
    }

    if ([...new Set(userInput)].length !== userInput.length) {
      throw new Error("중복된 숫자를 피해주세요");
    }

    if (userInput.includes('0')) {
      throw new Error("1~9사이의 숫자만 입력해주세요");
    }
    return true;
  }

  restartInputCheck(userInput) {
    if (userInput !== RESTART_INPUT_NUM || userInput !== END_INPUT_NUM) {
      throw new Error("1, 2 둘중 하나만 선택해주세요 (1: 재시작, 2: 종료)");
    }
    return true;
  }
}

module.exports = ExceptionCheck;