const { AnswerError, FlagError, ERROR_CODE } = require("./Error");
const { FLAG } = require("./lib/constants");

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

  static flag(flag) {
    if (flag !== FLAG.REPLAY && flag !== FLAG.EXIT) {
      throw new FlagError(ERROR_CODE.WRONG_FLAG, flag);
    }

    return flag;
  }
}

module.exports = Validator;
