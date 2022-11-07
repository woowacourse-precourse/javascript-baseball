const MissionUtils = require("@woowacourse/mission-utils");
const { REPLY, MESSAGE, ERROR_MESSAGE, BASEBALL_TERM } = require("./Constants");

class App {
  constructor() {
    this.computerNumber = null;
  }

  showMessage(message) {
    MissionUtils.Console.print(message);
  }

  generateComputerNumber() {
    const numberArr = [];

    while (numberArr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(randomNumber)) {
        numberArr.push(randomNumber);
      }
    }
    this.computerNumber = numberArr;
  }

  isEveryNumberUnique(nums) {
    return nums.length === new Set(nums).size;
  }

  getUserNumber() {
    MissionUtils.Console.readLine(MESSAGE.ASK_NUMBER, (inputNumber) => {
      const userNumber = Array.from(inputNumber, Number);
      if (this.checkValidity(userNumber)) {
        this.compareNumbers(this.computerNumber, userNumber);
      }
    });
  }

  checkValidity(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error(ERROR_MESSAGE.QUANTITY);
    }

    if (!this.isEveryNumberUnique(userNumber)) {
      throw new Error(ERROR_MESSAGE.REPEAT);
    }

    if (!userNumber.every((num) => Number.isInteger(num))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    if (userNumber.includes(0)) {
      throw new Error(ERROR_MESSAGE.HAS_ZERO);
    }

    return true;
  }

  getResult(computer, user) {
    const ballNum = user
      .filter((item, ind) => item !== computer[ind])
      .filter((item) => computer.includes(item)).length;

    const strikeNum = user.filter((item, ind) => item === computer[ind]).length;

    return { ballNum, strikeNum };
  }

  showResult(result) {
    const { ballNum, strikeNum } = result;

    let message = `${ballNum === 0 ? "" : ballNum + BASEBALL_TERM.BALL} ${
      strikeNum === 0 ? "" : strikeNum + BASEBALL_TERM.STRIKE
    }`;

    if (ballNum === 0 && strikeNum === 0) {
      message = BASEBALL_TERM.NOTHING;
    }

    this.showMessage(message.trim());
  }

  askToPlayAgain() {
    MissionUtils.Console.readLine(MESSAGE.ASK_REPLAY, (reply) => {
      if (reply === REPLY.REPLAY) {
        this.playNewGame();
      } else if (reply === REPLY.GAME_END) {
        MissionUtils.Console.close();
      } else {
        throw new Error(ERROR_MESSAGE.WRONG_REPLY);
      }
    });
  }

  compareNumbers(computer, user) {
    const result = this.getResult(computer, user);
    this.showResult(result);

    if (result.strikeNum === 3) {
      this.showMessage(MESSAGE.GAME_END);
      this.askToPlayAgain();
    } else {
      this.getUserNumber();
    }
  }

  playNewGame() {
    this.generateComputerNumber();
    this.getUserNumber();
  }

  play() {
    this.showMessage(MESSAGE.GAME_START);
    this.playNewGame();
  }
}
new App().play();
module.exports = App;
