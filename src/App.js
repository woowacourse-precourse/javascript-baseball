const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = [];
  userAnswer = 0;
  isRight = false;
  strike = 0;
  ball = 0;

  constructor() {
    this.answer = this.createAnswer();
    this.isRight = false;
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

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.Game()
      .then(() => {
        MissionUtils.Console.close();
      })
      .catch((e) => {
        MissionUtils.Console.close();
        return;
      });
  }

  async checkRestartGame() {
    if ((await this.inputRestartGameValue()) == 2) {
      return true;
    } else {
      return false;
    }
  }

  inputRestartGameValue = () => {
    return new Promise((resolove, reject) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (answer) => {
          resolove(answer);
        }
      );
    });
  };

  async Game() {
    while (true) {
      this.initializer();
      try {
        await this.doBaseBall();
      } catch (e) {
        throw new Error(e);
      }
      if (this.isRight && (await this.checkRestartGame())) {
        break;
      } else if (this.isRight) {
        this.reGame();
      }
    }
  }

  duplicateCheck = (answer, val) => {
    return answer.every((e) => val !== e);
  };

  reGame = () => {
    this.answer = this.createAnswer();
    this.isRight = false;
    this.strike = 0;
    this.ball = 0;
  };

  initializer = () => {
    this.isRight = false;
    this.strike = 0;
    this.ball = 0;
  };

  async doBaseBall() {
    this.userAnswer = await this.input();
    this.checkBallValidity();
    this.judgeResult();
    this.printResult();
    this.checkWin();
  }

  async checkWin() {
    if (this.strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isRight = true;
    }
  }

  printResult = () => {
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
    this.isNumber();
    this.isThreeDigit();
    this.checkMyDuplicate();
  };

  isNumber = () => {
    if (isNaN(parseInt(this.userAnswer))) {
      throw new Error("숫자를 입력하세요!");
    }
  };

  isThreeDigit = () => {
    if ([...this.userAnswer].length !== 3) {
      throw new Error("3자리 숫자를 입력하세요!");
    }
  };

  checkMyDuplicate = () => {
    [...this.userAnswer].map((userValue, idx) => {
      const checkValue = [...this.userAnswer];
      checkValue.splice(idx, 1);
      if (checkValue.includes(userValue)) {
        throw new Error("중복되지 않은 값을 입력하시오");
      }
    });
  };

  input = () => {
    return new Promise((resolove, reject) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
        resolove(answer);
      });
    });
  };
}
module.exports = App;
