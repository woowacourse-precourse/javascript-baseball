const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computer = [];
    this.ball = 0;
    this.strike = 0;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber();
    this.start();
  }

  computerNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  start() {
    this.ball = 0;
    this.strike = 0;

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const regExp = /^[1-9]{3}$/;
      if (regExp.test(answer)) {
        this.ballAndStrikeCount(answer);
        MissionUtils.Console.print(this.ballAndStrikeMessage());

        if (this.strike === 3) {
          this.endMessage();
        } else {
          this.start();
        }
      } else {
        throw new Error();
      }
    });
  }

  ballAndStrikeCount(answer) {
    for (let i = 0; i < this.computer.length; i++) {
      if (i === this.computer.indexOf(parseInt(answer[i]))) this.strike++;
      else if (this.computer.includes(parseInt(answer[i]))) this.ball++;
    }
  }

  ballAndStrikeMessage() {
    if (this.ball > 0 && this.strike > 0) {
      return `${this.ball}볼 ${this.strike}스트라이크`;
    } else if (this.ball > 0 && this.strike === 0) {
      return `${this.ball}볼`;
    } else if (this.ball === 0 && this.strike > 0 && this.strike != 3) {
      return `${this.strike}스트라이크`;
    } else if (this.ball === 0 && this.strike === 0) {
      return "낫싱";
    } else if (this.strike === 3) {
      return "3스트라이크";
    }
  }

  endMessage() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (answer) => {
      if (answer === "1") {
        this.computerNumber();
        this.start();
      } else if (answer === "2") {
        MissionUtils.Console.close();
      } else {
        throw new Error();
      }
    });
  }
}
module.exports = App;
