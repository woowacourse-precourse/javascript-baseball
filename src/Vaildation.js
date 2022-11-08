const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

class Vaildation {
  #MAX_LENGTH = 3;
  #ERROR_CASES = {
    reset: "failReset",
    compare: "failCompare",
  };
  #ERROR_MESSAGES = {
    failReset: "게임을 재시작하려면 1, 종료하려면 2를 입력해야 합니다.",
    failCompare: "서로 다른 1 ~ 9 사이의 숫자를 연속으로 3개 입력해야 합니다.",
  };

  findInputError(userInput) {
    if (
      typeof +userInput !== "number" ||
      userInput.length !== this.#MAX_LENGTH ||
      userInput.length !== new Set(userInput).size ||
      userInput.includes("0")
    ) {
      const { reset } = this.#ERROR_CASES;

      this.throwError(reset);
    }
  }

  findResetError(userInput) {
    if (userInput !== "1" && userInput !== "2") {
      const { compare } = this.#ERROR_CASES;

      this.throwError(compare);
    }
  }

  throwError(errorCase) {
    Console.close();
    throw new TypeError(this.#ERROR_MESSAGES[errorCase]);
  }
}

module.exports = Vaildation;
