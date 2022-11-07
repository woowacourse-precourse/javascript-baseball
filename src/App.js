const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const Game = new GameLoop();

    while (Game.continues) {
      Game.start();
      Game.end();
    }

    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.close();
  }
}

class Computer {
  constructor() {
    this._digits = [];
    this._initialize();
  }

  _initialize() {
    this._digits.length = 0;
    while (this._digits.length < 3) {
      const digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this._digits.includes(digit)) {
        this._digits.push(digit);
      }
    }
  }

  judge(userInput) {
    let balls = 0,
      strikes = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (this._digits.includes(Number(userInput[i]))) {
        balls++;
      }

      if (this._digits[i] === Number(userInput[i])) {
        balls--;
        strikes++;
      }
    }

    return [balls, strikes];
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
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (message) => {
        message = this._validate(message);
        let [balls, strikes] = Opponent.judge(message);
        gameOver = this._respond(balls, strikes);
      });
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return;
  }

  end() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    MissionUtils.Console.readLine("", (message) => {
      if (message === "2") {
        this.continues = false;
        return;
      }

      if (message === "1") {
        this.continues = true;
        return;
      }

      MissionUtils.Console.close();
      throw new Error("1이나 2를 입력해야 합니다");
    });
  }

  _validate(message) {
    if (typeof message != "string") {
      MissionUtils.Console.close();
      throw new Error("문자열을 입력해야 합니다");
    }

    if (!/^\d+$/.test(message)) {
      MissionUtils.Console.close();
      throw new Error("숫자를 입력해야 합니다");
    }

    if (message.includes("0")) {
      MissionUtils.Console.close();
      throw new Error("1에서 9 사이 숫자를 입력해야 합니다.");
    }

    if (message.length != 3) {
      MissionUtils.Console.close();
      throw new Error("세자리 숫자를 입력해야 합니다");
    }

    if (new Set(message).size != 3) {
      MissionUtils.Console.close();
      throw new Error("서로 다른 숫자를 입력해야 합니다");
    }

    return message;
  }

  _respond(balls, strikes) {
    if (balls === 0 && strikes === 0) {
      MissionUtils.Console.print("낫싱");
    }

    if (balls != 0 && strikes === 0) {
      MissionUtils.Console.print(`${balls}볼`);
    }

    if (balls != 0 && strikes != 0) {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }

    if (balls === 0 && strikes != 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
      if (strikes === 3) {
        return true;
      }
    }

    return false;
  }
}

module.exports = App;
