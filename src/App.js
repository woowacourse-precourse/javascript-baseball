const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.correctAnswer = false;
  }

  getComputerNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  static countStrike(computerNumber, input) {
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      let found = computerNumber.indexOf(Number(input[i]));
      if (found !== -1 && found == i) {
        strikeCount++;
      }
    }
    return strikeCount;
  }

  static countBall(computerNumber, input) {
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      let found = computerNumber.indexOf(Number(input[i]));
      if (found != -1 && found != i) {
        ballCount++;
      }
    }
    return ballCount;
  }

  static printResult(strike, ball) {
    if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return;
    }
    if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
    if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    if (strike == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    if (ball == 0 && strike == 0) {
      MissionUtils.Console.print("낫싱");
    }
  }

  compareNumber(input) {
    let strike = App.countStrike(this.computerNumber, input);
    let ball = App.countBall(this.computerNumber, input);

    if (strike === 3) {
      this.correctAnswer = true;
    }
    App.printResult(strike, ball);
  }

  static validUserInput(input) {
    if (input.length !== 3) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    if (new Set(input).size !== 3) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    if (input.includes("0")) {
      throw new Error("중복되지 않는 1~9까지의 3자리 숫자만 입력해주세요");
    }
    return true;
  }

  isCorrect() {
    if (this.correctAnswer === true) {
      return true;
    }
    return false;
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      App.validUserInput(input);

      this.compareNumber(input);
      if (this.isCorrect() == true) {
        this.gameOver();
      }
      this.userInput();
    });
  }

  gameRestart() {
    this.computerNumber.length = 0;
    this.correctAnswer = false;
    this.gameStart();
  }

  gameOver() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (input) => {
      if (input !== "1" && input !== "2") {
        throw new Error("1또는 2를 선택해주세요.");
      }

      if (input === "1") {
        this.gameRestart();
      }
      if (input === "2") {
        MissionUtils.Console.close();
      }
    });
  }
  gameStart() {
    this.getComputerNumber();
    this.userInput();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}
const app = new App();
app.play();
module.exports = App;
