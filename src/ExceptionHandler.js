const { USER_INPUT_LENGTH, INVALID } = require("./Constant");

class ExceptionHandler {
  checkUserInputRedundancy(answer) {
    const checkSet = new Set(answer.split(""));

    if ([...checkSet].length < USER_INPUT_LENGTH) {
      throw new Error("중복이 없는 숫자를 입력해주세요.");
    }
  }

  checkUserInputLength(answer) {
    if (answer.length !== USER_INPUT_LENGTH) {
      throw new Error("세자리 숫자를 입력해주세요.");
    }
  }

  checkValidInput(answer) {
    if (answer != 1 && answer != 2) throw new Error("유효한 숫자를 입력해주세요");
  }

  checkInvalidDigit(answer) {
    answer.split("").forEach((digit) => {
      if (digit == INVALID) {
        throw new Error("1부터 9까지의 숫자를 입력해주세요");
      }
    });
  }
}

module.exports = ExceptionHandler;
