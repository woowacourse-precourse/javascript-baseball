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

  play() {
    this.createRandomNum();

    this.startGame();
  }
}

const app = new App();

app.play();

module.exports = App;
