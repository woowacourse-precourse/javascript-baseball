const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

class Computer {
  constructor() {
    this._digits = [];
    this._initialize();
  }

  _initialize() {
    this._digits.length = 0;
    while (this._digits.length <= 3) {
      const digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this._digits.includes(digit)) {
        this._digits.push(digit);
      }
    }
  }

  judge(message) {
    let ball = 0,
      strike = 0;

    for (let i = 0; i < 3; i++) {
      if (!this._digits.includes(message[i])) continue;
      ball += 1;
    }

    for (let i = 0; i < 3; i++) {
      if (message[i] != this._digits[i]) continue;
      strike += 1;
      ball -= 1;
    }

    return [ball, strike];
  }
}

class GameLoop {
  constructor() {}

  start() {
    let Opponent = new Computer();
    let gameOver = false;

    while (!this.gameOver) {
      let message = MissionUtils.Console.readLine(
        "숫자를 입력해주세요 : ",
        this._validate
      );
      let [ball, strike] = Opponent.judge(message);
      this.gameOver = this._respond(ball, strike);
    }

    this.restart();
  }

  restart() {
    const gameEnd = MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (message) => {
        if (message != "1" || message != "2") {
          throw new Error("1이나 2를 입력해야 합니다");
        }
      }
    );

    if (gameEnd === "1") {
      this.start();
    }
  }

  _validate(message) {
    if (typeof message != "string") {
      throw new Error("문자열을 입력해야 합니다");
    }

    if (message.length != 3) {
      throw new Error("세자리 숫자를 입력해야 합니다");
    }

    if (new Set(message).length != 3) {
      throw new Error("서로 다른 숫자를 입력해야 합니다");
    }

    return message;
  }

  _respond(ball, strike) {
    if (ball == 0 && strike == 0) {
      MissionUtils.Console.print("낫싱");
    }

    if (ball == 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }

    if (strike == 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }

    if (strike != 3) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike == 3) {
      MissionUtils.Console.print("3스트라이크");
      return true;
    }

    return false;
  }
}

function displayWelcomeMessage() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

displayWelcomeMessage();
const app = new App();
app.play();

module.exports = App;
