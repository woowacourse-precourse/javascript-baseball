const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isFirstPlay = true;
    this.isRestart = false;

    this.strike = 0;
    this.ball = 0;

    this.answer = [];
  }

  makeAnswer() {
    console.log("makeAnswer 실행됨");
    const randomNumbersSet = new Set();
    while (randomNumbersSet.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      randomNumbersSet.add(randomNumber);
    }
    this.answer = [...randomNumbersSet];
  }

  checkUserInput(userInput) {
    if (userInput.match(/[^1-9]/)) {
      throw new Error("입력이 숫자가 아닙니다.");
    }
    if (userInput.length !== 3) {
      throw new Error("입력한 숫자의 개수가 3개가 아닙니다.");
    }
    if (new Set(userInput.split("")).size !== 3) {
      throw new Error("입력한 숫자가 중복되었습니다.");
    }
  }

  compareScore(userInput) {
    this.answer.forEach((num, index) => {
      if (num === parseInt(userInput[index])) {
        this.strike++;
      } else if (userInput.includes(num)) {
        this.ball++;
      }
    });
  }

  createResultMessage() {
    if (this.strike === 0 && this.ball === 0) {
      return "낫싱";
    }
    if (this.strike === 0) {
      return `${this.ball}볼`;
    }
    if (this.ball === 0) {
      return `${this.strike}스트라이크`;
    }
    return `${this.ball}볼 ${this.strike}스트라이크 `;
  }

  decideContinue() {
    if (this.strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isRestart = true;
    }
  }

  initScore() {
    this.ball = 0;
    this.strike = 0;

    if (this.isRestart) {
      this.makeAnswer();
    }
  }

  start() {
    this.initScore();
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkUserInput(userInput);
      this.compareScore(userInput);
      Console.print(this.createResultMessage());
      this.decideContinue();

      if (this.isRestart) {
        this.restart();
      } else {
        this.start();
      }
    });
  }

  restart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (userInput) => {
        this.initScore();
        if (userInput === "1") {
          this.isRestart = false;
          this.start();
        } else if (userInput === "2") {
          Console.print("게임을 종료합니다.");
          Console.close();
        } else {
          throw new Error("잘못된 입력입니다.");
        }
      }
    );
  }

  play() {
    this.makeAnswer();
    console.log(this.answer);
    this.start();
  }
}

module.exports = App;
