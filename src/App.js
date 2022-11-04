const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = [];
  userAnswer = 0;
  isRight = false;
  err = false;
  strike = 0;
  ball = 0;

  constructor() {
    this.answer = this.createAnswer();
    this.isRight = false;
    this.err = false;
    this.strike = 0;
    this.ball = 0;
  }

  createAnswer = () => {
    let i = 0;
    const answer = [];
    while (i < 3) {
      let randVal = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.duplicateCheck(answer, randVal)) {
        answer.push(randVal);
        i++;
      }
    }
    return answer;
  };

  async Game() {
    while (true) {
      this.initializer();
      await this.doBaseBall();
      if (this.err) {
        console.log("err");
      }
      if (this.isRight) {
        break;
      }
    }
  }

  duplicateCheck(answer, val) {
    return answer.every((e) => val !== e);
  }

  initializer = () => {
    this.isRight = false;
    this.err = false;
    this.strike = 0;
    this.ball = 0;
  };

  async doBaseBall() {
    this.userAnswer = await this.input();
    this.checkBallValidity();
    if (!this.err) {
      this.judgeResult();
      this.printResult();
      this.checkWin();
    }
  }

  checkWin = () => {
    if (this.strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isRight = true;
    }
  };

  printResult = () => {
    console.log(this.strike, this.ball);
    if ((this.strike === 0) & (this.ball === 0)) {
      MissionUtils.Console.print("낫싱");
    } else if ((this.strike === 0) & (this.ball !== 0)) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else if ((this.strike !== 0) & (this.ball === 0)) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
  };

  judgeResult = () => {
    [...this.userAnswer].map((e, ballIdx) => {
      this.countScore(e, ballIdx);
    });
  };

  countScore = (userAnswerBall, ballIdx) => {
    if (this.answer[ballIdx] === parseInt(userAnswerBall)) {
      this.countStrike();
    } else if (this.answer.includes(parseInt(userAnswerBall))) {
      this.countBall();
    }
  };

  countStrike = () => {
    this.strike += 1;
  };

  countBall = () => {
    this.ball += 1;
  };

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
    this.Game();
  }
}

const endGame = () => {
  process.exit(1);
};

const app = new App();
console.log(app.answer);
app.play();

module.exports = App;
