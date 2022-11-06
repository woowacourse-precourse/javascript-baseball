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

    return [strike, ball];
  }
}

class GameLoop {
  constructor() {
    this.Opponent = new Computer();
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this._continue();
  }

  _continue() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", this._validate);
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
  }
}

module.exports = App;
