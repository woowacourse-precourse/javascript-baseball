const Vaildation = require("./Vaildation");
const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = MissionUtils;

class App extends Vaildation {
  #NUMERIC_CONSTANTS = {
    maxLength: 3,
    min: 1,
    max: 9,
    initResult: 0,
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
}

module.exports = App;
