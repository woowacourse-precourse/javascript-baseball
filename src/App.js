const { Random, Console } = require("@woowacourse/mission-utils");
const { GAME, MENT } = require("./Const");

class App {
  constructor() {
    this.game = GAME.PLAY;
    this.answer = this.createAnswer();
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
        Console.close();
        return;
    }
  }

  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  startPrint() {
    Console.print(MENT.START);
    return;
  }

  inputUserAnswer() {
    Console.readLine(MENT.INPUT, (answer) => {
      this.userAnswer = parseInt(answer);
      try {
        this.answerChecker(this.userAnswer);
        this.resultPrint(this.compareUserAnswer(this.userAnswer, this.answer));
        this.play();
      } catch (e) {
        this.exceptionEnd();
        throw e;
      }
    });
  }

  answerChecker(answer) {
    if (answer < 100 || answer > 999) throw "not number";
    if (new Set(String(answer).split("")).size !== 3) throw "not number";
    return;
  }

  inputUserProgress() {
    Console.readLine(MENT.RE_START, (answer) => {
      this.userAnswer = parseInt(answer);
      this.askUser(this.userAnswer);
      this.play();
    });
  }

  askUser(answer) {
    const result = this.isPlayContinue(answer);

    if (result) {
      this.game = GAME.PLAY;
      this.answer = this.createAnswer();
    }
    if (!result) {
      this.game = GAME.EXIT;
      Console.print(MENT.GMAE_END);
    }
    return;
  }

  isPlayContinue(answer) {
    switch (answer) {
      case 1:
        return true;
      case 2:
        return false;
      default:
        throw "에러발생";
        this.exceptionEnd();
    }
  }

  compareUserAnswer(answer, computer) {
    const user = String(answer).split("");
    const obj = { ball: 0, strike: 0 };
    user.map((n, i) => {
      const num = parseInt(n);
      if (computer[i] !== num && computer.includes(num)) obj.ball += 1;
      if (computer[i] === num) obj.strike += 1;
    });
    return obj;
  }

  resultPrint({ ball, strike }) {
    let resultMent;
    switch (strike) {
      case 0:
        ball >= 1
          ? (resultMent = `${ball}${MENT.BALL}`)
          : (resultMent = MENT.NOTHING);
        break;
      case 1:
      case 2:
      case 3:
        ball >= 1
          ? (resultMent = `${ball}${MENT.BALL} ${strike}${MENT.STRIKE}`)
          : (resultMent = `${strike}${MENT.STRIKE}`);
        break;
      default:
        break;
    }

    Console.print(resultMent);

    if (strike === 3) this.game = GAME.STOP;

    return;
  }

  exceptionEnd() {
    this.game = GAME.EXIT;
    Console.print(MENT.EXCEPTION);
    return;
  }

  endGame() {
    this.game = GAME.STOP;
    Console.print(MENT.END);
    return;
  }
}

const app = new App();

app.play();

module.exports = App;
