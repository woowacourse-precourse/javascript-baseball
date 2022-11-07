const MissonUtils = require("@woowacourse/mission-utils");

class App {
  #RANDOM_NUM_LENGTH = 3;
  #randomNum = [];

  createRandomNum() {
    Array.from({ length: this.#RANDOM_NUM_LENGTH }).forEach(
      () =>
        (this.#randomNum = [
          ...this.#randomNum,
          MissonUtils.Random.pickNumberInRange(1, 9) + "",
        ])
    );
  }

  startGame() {
    MissonUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.getInput();
  }

  getInput() {
    MissonUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) =>
      this.compareResults(userInput)
    );
  }

  compareResults(userInput) {
    userInput = userInput.split("");

    const compareResults = {};

    userInput.forEach((num, index) => {
      if (this.#randomNum.includes(num)) {
        if (num === this.#randomNum[index]) {
          compareResults.strike += 1;
        } else {
          compareResults.ball += 1;
        }
      }
    });

    this.printResults(compareResults);
  }

  printResults(compareResults) {
    if (Object.keys(compareResults).length === 0)
      MissonUtils.Console.print("낫싱");

    const { strike, ball } = compareResults;

    if (ball && !strike) MissonUtils.Console.print(`${ball}볼`);

    if (!ball && strike) MissonUtils.Console.print(`${strike}스트라이크`);

    if (ball && strike)
      MissonUtils.Console.print(`${ball}볼 ${strike}스트라이크`);

    strike === 3 ? this.resetGame() : this.getInput();
  }

  play() {
    this.createRandomNum();

    this.startGame();
  }
}

const app = new App();

app.play();

module.exports = App;
