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
    this.try = 1;
  }

  async play() {
    if (this.try === 1) this.startGame();
    switch (this.game) {
      case GAME.PLAY:
        this.try += 1;
        await this.playGame();
        if (!this.game) this.endGame();
        break;
      case GAME.STOP:
        await this.askUser();
        this.play();
        break;
      case GAME.EXIT:
        MissionUtils.Console.print(ment.gameEnd);
        MissionUtils.Console.close();
        return;
    }
  }

  async playGame() {
    const anwser = this.createAnswer();
    while (this.game === GAME.PLAY) {
      await this.checkUserGameAnswer();
      if (this.game === GAME.EXIT) break;
      const result = this.compareUserAnswer(anwser);
      this.resultPrint(result);
    }
    return;
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

  startGame() {
    MissionUtils.Console.print(ment.start);
    return;
  }

  inputUserAnswer(ment) {
    MissionUtils.Console.readLine(ment, (answer) => {
      this.userAnswer = parseInt(answer);
      resolve("input");
    });
  }

  async checkUserGameAnswer() {
    try {
      await this.inputUserAnswer(ment.input);
      await this.answerChecker();
    } catch (e) {
      this.exceptionEnd();
    }
    return;
  }

  answerChecker() {
    if (this.userAnswer < 100 || this.userAnswer > 999)
      throw new Error("not number");
    if (new Set(String(this.userAnswer).split("")).size !== 3)
      throw new Error("not number");
    return true;
  }

  async isPlayContinue() {
    try {
      await this.inputUserAnswer(ment.reStart);
    } catch (e) {
      this.exceptionEnd();
    }

    switch (this.userAnswer) {
      case 1:
        return true;
      case 2:
        return false;
      default:
        this.exceptionEnd();
    }
  }

  async askUser() {
    const result = await this.isPlayContinue();

    if (result) this.game = GAME.PLAY;
    if (!result) this.game = GAME.EXIT;
    return;
  }

  compareUserAnswer(answer) {
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
    MissionUtils.Console.close();
    return;
  }

  endGame() {
    this.game = GAME.STOP;
    MissionUtils.Console.print(ment.end);
    this.play();
    return;
  }
}

const app = new App();

app.play();

module.exports = App;
