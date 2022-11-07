const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = MissionUtils;

class App {
  #NUMERIC_CONSTANTS = {
    maxLength: 3,
    min: 1,
    max: 9,
    initResult: 0,
  };
  #ERROR_CASES = {
    reset: "failReset",
    compare: "failCompare",
  };
  #ERROR_MESSAGES = {
    failReset: "게임을 재시작하려면 1, 종료하려면 2를 입력해야 합니다.",
    failCompare: "서로 다른 1 ~ 9 사이의 숫자를 연속으로 3개 입력해야 합니다.",
  };

  #randomNum = [];

  play() {
    this.createRandomNum();

    this.startGame();
  }

  createRandomNum() {
    this.#randomNum = [];

    const { maxLength, min, max } = this.#NUMERIC_CONSTANTS;

    while (this.#randomNum.length < maxLength) {
      this.#randomNum = Array.from(
        new Set([...this.#randomNum, Random.pickNumberInRange(min, max) + ""])
      );
    }
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.getInput();
  }

  getInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) =>
      this.compareNums(userInput)
    );
  }

  compareNums(userInput) {
    this.findInputError(userInput);

    userInput = userInput.split("");

    const { initResult } = this.#NUMERIC_CONSTANTS;
    const results = { ball: initResult, strike: initResult };

    userInput.forEach((num, index) => {
      if (this.#randomNum.includes(num)) {
        num === this.#randomNum[index]
          ? (results.strike += 1)
          : (results.ball += 1);
      }
    });

    this.printResults(results);
  }

  printResults(compareResults) {
    const { ball, strike } = compareResults;

    if (!ball && !strike) Console.print("낫싱");

    if (ball && !strike) Console.print(`${ball}볼`);

    if (!ball && strike) Console.print(`${strike}스트라이크`);

    if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);

    const { maxLength } = this.#NUMERIC_CONSTANTS;
    strike === maxLength ? this.resetGame() : this.getInput();
  }

  resetGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        this.findResetError(userInput);

        userInput === "1" ? this.play() : Console.close();
      }
    );
  }

  findInputError(userInput) {
    const { maxLength } = this.#NUMERIC_CONSTANTS;

    if (
      typeof +userInput !== "number" ||
      userInput.length !== maxLength ||
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

const app = new App();

app.play();

module.exports = App;
