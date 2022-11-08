const { WRONG_INPUT_ALERT, REPLAY } = require("./lib/constants");

class Exception {
  static answer(answer) {
    if (isNaN(parseInt(answer))) {
      throw WRONG_INPUT_ALERT.NOT_NUMBER;
    }

    if (answer.length !== 3) {
      throw WRONG_INPUT_ALERT.NOT_THREE_DIGITS;
    }

    if (answer.split("").includes("0")) {
      throw WRONG_INPUT_ALERT.INCLUDES_ZERO;
    }

    if (answer.length !== new Set(answer).size) {
      throw WRONG_INPUT_ALERT.NOT_UNIQUE_NUMBER;
    }

    if(answer.length < 0){
      throw WRONG_INPUT_ALERT.NOT_POSITIVE;
    }

    return answer;
  }

  static restart(answer) {
    if (answer !== REPLAY.RESTART && answer !== REPLAY.EXIT) {
      throw WRONG_INPUT_ALERT.NOT_ONE_OR_TWO;
    }

    return answer;
  }
}

module.exports = Exception;