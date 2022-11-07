const { AnswerError, ERROR_CODE } = require("./Error");

class Validator {
  static answer(answer) {
    if (isNaN(parseInt(answer))) {
      throw new AnswerError(ERROR_CODE.WRONG_TYPE, answer);
    }

    if (answer.length !== 3) {
      throw new AnswerError(ERROR_CODE.OUT_OF_RANGE, answer);
    }

    if (answer.split("").includes("0")) {
      throw new AnswerError(ERROR_CODE.WRONG_NUMBER, answer);
    }

    if (answer.length !== new Set(answer).size) {
      throw new AnswerError(ERROR_CODE.DUPLICATED, answer);
    }

    return answer;
  }
}

module.exports = Validator;
