const MissionUtils = require("@woowacourse/mission-utils");

const gameStatus = {
  play: true,
  stop: false,
};

const ment = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  reStart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  input: "숫자를 입력해주세요 : ",
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
  exception: "잘못된 숫자를 입력하셨습니다. 게임 종료",
};

class App {
  async play() {
    this.game = gameStatus.play;

    const anwser = this.startGame().createAnswer();

    // while (this.game) {
    //   try {
    //     await this.inputUserAnswer();
    //     if (this.checkUserGameAnswer()) throw new Error("out of range");
    //     const result = this.compareUserAnswer(anwser);
    //     this.resultPrint(result);
    //   } catch (e) {
    //     this.exceptionEnd();
    //   }
    // }

    // if (!this.game) {
    //   this.endGame();
    //   try {
    //     await this.userProgressInput();
    //     if (this.checkUserProgressInput()) throw new Error("out of range");
    //   } catch (e) {
    //     console.log(e);
    //     this.exceptionEnd();
    //   }
    // }
    // this.isPlayContinue(this.userAnswer);

    return;
  }

  createAnswer() {
    const answer = [];
    while (answer < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  startGame() {
    MissionUtils.Console.print(ment.start);
    return this;
  }

  inputUserAnswer() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(ment.input, (answer) => {
        this.userAnswer = answer;
        resolve();
      });
    });
  }

  checkUserGameAnswer() {
    if (this.userAnswer < 100 || this.userAnswer > 999) return true;
    return false;
  }

  compareUserAnswer(answer) {
    const user = this.userAnswer.split("");
    const obj = { ball: 0, strike: 0 };
    user.map((n, i) => {
      const num = parseInt(n);
      if (answer[i] !== num && answer.includes(num)) obj.ball += 1;
      if (answer[i] === num) obj.strike += 1;
    });
    //todo: 나중에 지우기
    MissionUtils.Console.print(answer);
    return obj;
  }

  resultPrint({ ball, strike }) {
    let resultMent;
    switch (strike) {
      case 0:
        ball >= 1
          ? (resultMent = `${ball}${ment.ball}`)
          : (resultMent = ment.nothing);
        break;
      case 1:
      case 2:
      case 3:
        ball >= 1
          ? (resultMent = `${ball}${ment.ball} ${strike}${ment.strike}`)
          : (resultMent = `${strike}${ment.strike}`);
        break;
      default:
        break;
    }

    MissionUtils.Console.print(resultMent);

    return;
  }

  isPlayContinue(answer) {
    if (answer === "1") return this.play();
    if (answer === "2") return;
  }

  async userProgressInput() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(ment.reStart, (answer) => {
        this.userAnswer = answer;
        resolve();
      });
    });
  }

  checkUserProgressInput() {
    if (this.userAnswer === 1 || this.userAnswer === 2) return true;
    return false;
  }

  exceptionEnd() {
    this.game = gameStatus.stop;
    MissionUtils.Console.print(ment.exception);
    MissionUtils.Console.close();
    return;
  }

  endGame() {
    this.game = gameStatus.stop;
    MissionUtils.Console.print(ment.end);
    MissionUtils.Console.close();
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
