const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const Game = new GameLoop();
    while (Game.continues) {
      Game.start();
      Game.restart();
    }
  }
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
      if (!this._digits.includes(message.at(i))) continue;
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
  constructor() {
    this.continues = true;
  }

  start() {
    const Opponent = new Computer();
    let gameOver = false;

    while (!gameOver) {
      let message = MissionUtils.Console.readLine(
        "숫자를 입력해주세요 : ",
        this._validate
      );
      let [ball, strike] = Opponent.judge(message);
      gameOver = this._respond(ball, strike);
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return;
  }

  restart() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const gameEnd = MissionUtils.Console.readLine();

    if (gameEnd === "1") {
      return;
    }

    if (gameEnd === "2") {
      this.continues = false;
      MissionUtils.Console.print("게임 종료");
      return;
    }

    throw new Error("1이나 2를 입력해야합니다");
  }

  _validate(message) {
    if (typeof message != "string") {
      throw new Error("문자열을 입력해야 합니다");
    }

    if (!/^\d+$/.test(message)) {
      throw new Error("숫자를 입력해야 합니다");
    }

    if (message.length != 3) {
      throw new Error("세자리 숫자를 입력해야 합니다");
    }

    // if (new Set(message).length != 3) {
    //   throw new Error("서로 다른 숫자를 입력해야 합니다");
    // }

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

const app = new App();
app.play();

module.exports = App;
