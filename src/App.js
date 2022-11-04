const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = this.makeAnswer();
    this.strike = 0;
    this.ball = 0;
    this.isRestart = false;
  }

  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
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

  play() {
    const message = this.isRestart
      ? "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      : "숫자를 입력해주세요 : ";
    Console.readLine(message, (userInput) => {
      this.checkUserInput(userInput);
      this.compareScore(userInput);

      Console.print(this.createResultMessage());
      this.decideContinue();
      this.play();
    });
  }
}

module.exports = App;
