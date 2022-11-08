const MissionUtils = require("@woowacourse/mission-utils");
const InputError = require("./utils/Error");
const { GAME_MESSAGE, RETRY_MESSAGE } = require("./constants/messages");

class App {
  constructor() {
    this.answer = null;
    this.isDone = false;
    this.Error = new InputError();
  }

  startGame() {
    MissionUtils.Console.print(GAME_MESSAGE.GMAE_START);
  }

  createRandom() {
    const numbers = [];
    while (numbers.length < GAME_MESSAGE.MAX_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.answer = numbers;
  }

  getUserInput(currentAnswer) {
    MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_TEXT, (answer) => {
      this.Error.validateUserInput(answer);
      this.createHint(answer, currentAnswer);
      this.isDone ? this.getRetryInput() : this.getUserInput(currentAnswer);
    });
  }

  addScore(obj, position) {
    obj[position] += 1;
  }

  checkInputIsCorrect(userInput, currentAnswer) {
    const score = {
      strike: 0,
      ball: 0,
    };
    for (let i = 0; i < 3; i++) {
      if (Number(userInput[i]) === currentAnswer[i]) {
        this.addScore(score, "strike");
      } else if (currentAnswer.includes(Number(userInput[i]))) {
        this.addScore(score, "ball");
      }
    }
    return score;
  }

  printHint(hint) {
    MissionUtils.Console.print(hint);
  }

  createHint(input, currentAnswer) {
    const score = this.checkInputIsCorrect(input, currentAnswer);
    let hint;

    switch (score.strike === 0) {
      case true:
        score.ball === 0 ? (hint = "낫싱") : (hint = `${score.ball}볼`);
        break;
      case false:
        score.ball === 0
          ? (hint = `${score.strike}스트라이크`)
          : (hint = `${score.ball}볼 ${score.strike}스트라이크`);
    }
    this.printHint(hint);
    if (hint === GAME_MESSAGE.ANSWER) {
      this.printGameOver();
      return;
    }
    this.isDone = false;
  }

  printGameOver() {
    MissionUtils.Console.print(GAME_MESSAGE.GAME_OVER);
    this.printAskRetry();
    this.isDone = true;
  }

  printAskRetry() {
    MissionUtils.Console.print(GAME_MESSAGE.RETRY_TEXT);
  }

  retryGame() {
    this.createRandom();
    this.getUserInput(this.answer);
  }

  finishGame() {
    MissionUtils.Console.close();
  }

  getRetryInput() {
    MissionUtils.Console.readLine(GAME_MESSAGE.NO_MESSAGE, (answer) => {
      this.Error.validateRetryInput(answer);
      switch (answer) {
        case RETRY_MESSAGE.RETRY:
          this.retryGame();
          break;
        case RETRY_MESSAGE.FINISH:
          this.finishGame();
          break;
      }
    });
  }

  play() {
    this.startGame();
    this.createRandom();
    this.getUserInput(this.answer);
  }
}

const app = new App();
app.play();

module.exports = App;
