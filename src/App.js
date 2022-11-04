const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = 0;
  userAnswer = 0;
  isRight = false;
  err = false;
  constructor() {
    this.answer = MissionUtils.Random.pickNumberInRange(1, 9);
    this.isRight = false;
    this.err = false;
  }

  async Game() {
    while (true) {
      await this.doBaseBall();
      if (this.err) {
        console.log("ERR");
      } else {
        if (this.isRight) {
          break;
        } else {
          console.log(false);
        }
      }
    }
  }

  async doBaseBall() {
    this.userAnswer = await this.input();
    this.checkBallValidity();
    if (this.err) {
      return;
    } else {
      [...this.userAnswer].map((e) => {
        console.log(e);
      });
    }
  }

  checkBallValidity = () => {
    if (isNaN(parseInt(this.userAnswer))) {
      this.err = true;
    }
    if ([...this.userAnswer].length !== 3) {
      this.err = true;
    }
  };

  input = () => {
    return new Promise((resolove, reject) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
        resolove(answer);
      });
    });
  };

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.Game(this);
  }
}

const endGame = () => {
  process.exit(1);
};

const app = new App();
// app.play();
app.checkBallValidity("c13");
module.exports = App;
