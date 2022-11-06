const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.init();
    this.getUserNumber();
  }
  init() {
    this.computer = [];
    this.user = [];
    this.result = "";
    this.isCorrect = false;
    this.getComputerNumber();
  }
  getComputerNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    MissionUtils.Console.print(this.computer);
  }
  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.user = input.split("");
      if (this.user.filter((number) => number.match(/[^1-9]/g)).length) {
        throw Error("1부터 9까지의 숫자만 입력해주세요.");
      }
      if (this.user.length !== 3) {
        throw Error("3글자로 입력해주세요.");
      }
      this.checkResult();
    });
  }
  checkResult() {
    const balls = this.countBalls();
    const strikes = this.countStrikes();

    this.result = this.computeResult(balls, strikes);
    this.printResult(this.result);
  }
  countBalls() {
    let balls = 0;
    this.user.forEach((value, index) => {
      if (this.computer.includes(+value) && this.computer[index] !== +value) {
        balls += 1;
      }
    });
    return balls;
  }
  countStrikes() {
    let strikes = 0;
    this.user.forEach((value, index) => {
      if (this.computer.includes(+value) && this.computer[index] === +value) {
        strikes += 1;
      }
    });
    return strikes;
  }
  computeResult(balls, strikes) {
    let result = "";
    if (balls && !strikes) {
      result += balls + "볼";
    }
    if (strikes && !balls) {
      result += strikes + "스트라이크";
      if (strikes === 3) {
        this.isCorrect = true;
        result += "\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
      }
    }
    if (balls && strikes) {
      result += balls + "볼 " + strikes + "스트라이크";
    }
    if (!balls && !strikes) {
      result += "낫싱";
    }
    return result;
  }
  printResult() {
    MissionUtils.Console.print(this.result);
  }
  checkRetry() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (input === "1") {
          this.play();
        } else if (input === "2") {
          MissionUtils.Console.close();
        }
      }
    );
  }
}
const app = new App();
app.play();

module.exports = App;
