const App = require("./App");
const { print, close, readLine, pickNumberInRange } = require("./Utils");
const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("./Condition");

class ExceptionCheck {

  userInputCheck(userInput) {
    if (this.isNotThreeLengthInput(userInput)) {
      throw new Error("3개의 숫자를 입력해주세요");
    }

    if (this.isNotOnlyNumber(userInput)) {
      throw new Error("숫자만 입력해주세요");
    }

    if (this.isDuplicateNumber(userInput)) {
      throw new Error("중복된 숫자를 피해주세요");
    }

    if (this.isIncludeZeroNum(userInput)) {
      throw new Error("1~9사이의 숫자만 입력해주세요");
    }
    return true;
  }

  isNotThreeLengthInput(userInput) {
    return userInput.length !== COMPUTER_NUM_LENGTH;
  }

  isNotOnlyNumber(userInput) {
    return isNaN(userInput);
  }

  isDuplicateNumber(userInput) {
    return [...new Set(userInput)].length !== userInput.length;
  }

  isIncludeZeroNum(userInput) {
    return userInput.includes('0');
  }

  restartInputCheck(userInput) {
    if (this.isNotOneOrTwoNum(userInput)) {
      close();
      throw new Error("1, 2 둘중 하나만 선택해주세요 (1: 재시작, 2: 종료)");
    }
    return true;
  }

  isNotOneOrTwoNum(userInput) {
    return Number(userInput) !== RESTART_INPUT_NUM && Number(userInput) !== END_INPUT_NUM;
  }
}

module.exports = ExceptionCheck;