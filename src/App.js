const MissionUtils = require("@woowacourse/mission-utils");

const START_FLAG = "1";
const END_FLAG = "2";

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
    this.strikeNumber = [];
    this.ballNumber = [];
  }

  startGame() {
    this.makeCorrectNumber();
    console.log(this.computerNumber);
    this.putNumber();
  }

  makeCorrectNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  putNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      this.userNumber = answer.split("").map(Number);
      this.numberValidate(answer);
      this.comparingNumber();
    });
  }

  numberValidate(answer) {
    if (
      this.userNumber.length !== 3 &&
      answer !== START_FLAG &&
      answer !== END_FLAG
    ) {
      throw "3개의 숫자만 입력하세요";
    }
    if (this.userNumber.includes(0)) {
      throw "0이 아닌수를 입력하세요!";
    }
    if (new Set(this.userNumber).size < this.userNumber.length) {
      throw "서로다른 수를 입력하세요!";
    }
  }

  comparingNumber() {
    if (
      JSON.stringify(this.userNumber) === JSON.stringify(this.computerNumber)
    ) {
      this.gameWin();
    } else {
      this.notWin();
    }
  }

  gameWin() {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === START_FLAG) {
          this.startGame();
        } else if (answer === END_FLAG) {
          MissionUtils.Console.close();
        }
      }
    );
  }

  notWin() {
    this.userNumber.map((el, index) => {
      this.findBallandStrike(el, index);
    });

    if (this.strikeNumber.length === 0 && this.ballNumber.length === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (this.strikeNumber.length !== 0 && this.ballNumber.length === 0) {
      MissionUtils.Console.print(`${this.strikeNumber.length}스트라이크`);
    } else if (this.strikeNumber.length === 0 && this.ballNumber.length !== 0) {
      MissionUtils.Console.print(`${this.ballNumber.length}볼`);
    } else {
      MissionUtils.Console.print(
        `${this.ballNumber.length}볼 ${this.strikeNumber.length}스트라이크`
      );
    }
    this.strikeNumber = [];
    this.ballNumber = [];
    this.putNumber();
  }

  findBallandStrike(el, index) {
    if (this.userNumber[index] === this.computerNumber[index]) {
      this.strikeNumber.push(el);
    } else if (
      this.computerNumber
        .filter((el) => el !== this.computerNumber[index])
        .includes(el)
    ) {
      this.ballNumber.push(el);
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;

// node src/App.js
