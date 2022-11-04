const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = 0;
  userAnswer = 0;
  isRight = false;

  constructor() {
    this.answer = MissionUtils.Random.pickNumberInRange(1, 9);
    this.isRight = false;
  }

  async Game() {
    while (true) {
      await this.checkBallValidity();
      if (this.isRight) {
        break;
      } else {
        console.log(false);
      }
    }
  }

  async checkBallValidity() {
    this.userAnswer = parseInt(await this.input());
  }

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
app.play();

module.exports = App;
