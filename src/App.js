const MissionUtils = require("@woowacourse/mission-utils");

const GAME = {
  PLAY: true,
  STOP: false,
  EXIT: -1,
};

const ment = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  gameEnd: "게임 종료",
  reStart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
  input: "숫자를 입력해주세요 : ",
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
  exception: "잘못된 숫자를 입력하셨습니다. 게임 종료",
};

class App {
  constructor() {
    this.game = GAME.PLAY;
    this.anwser = this.createAnswer();
    this.startPrint();
  }

  play() {
    switch (this.game) {
      case GAME.PLAY:
        this.inputUserAnswer();
        break;
      case GAME.STOP:
        this.inputUserProgress();
        break;
      case GAME.EXIT:
        MissionUtils.Console.close();
        return;
    }
  }

  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  startPrint() {
    MissionUtils.Console.print(ment.start);
    return;
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine(ment.input, (answer) => {
      this.userAnswer = parseInt(answer);
      try {
        this.answerChecker();
        this.resultPrint(this.compareUserAnswer());
        this.play();
      } catch (e) {
        this.exceptionEnd();
        throw e;
      }
    });
  }

  answerChecker() {
    if (this.userAnswer < 100 || this.userAnswer > 999) throw "not number";
    if (new Set(String(this.userAnswer).split("")).size !== 3)
      throw "not number";
    return;
  }

  inputUserProgress() {
    MissionUtils.Console.readLine(ment.reStart, (answer) => {
      this.userAnswer = parseInt(answer);
      this.askUser();
      this.play();
    });
  }

  askUser() {
    const result = this.isPlayContinue();

    if (result) {
      this.game = GAME.PLAY;
      this.createAnswer();
    }
    if (!result) {
      this.game = GAME.EXIT;
      MissionUtils.Console.print(ment.gameEnd);
    }
    return;
  }

  isPlayContinue() {
    switch (this.userAnswer) {
      case 1:
        return true;
      case 2:
        return false;
      default:
        this.exceptionEnd();
    }
  }

  compareUserAnswer() {
    const answer = this.anwser;
    const user = String(this.userAnswer).split("");
    const obj = { ball: 0, strike: 0 };
    user.map((n, i) => {
      const num = parseInt(n);
      if (answer[i] !== num && answer.includes(num)) obj.ball += 1;
      if (answer[i] === num) obj.strike += 1;
    });
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

    if (strike === 3) this.game = GAME.STOP;

    return;
  }

  exceptionEnd() {
    this.game = GAME.EXIT;
    MissionUtils.Console.print(ment.exception);
    return;
  }

  endGame() {
    this.game = GAME.STOP;
    MissionUtils.Console.print(ment.end);
    return;
  }
}

const app = new App();

app.play();

module.exports = App;
