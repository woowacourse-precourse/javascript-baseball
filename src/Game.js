const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Referee = require("./Referee");
const { GAME_LENGTH, GAME_MESSAGES } = require("./constants/constants");

const mConsole = MissionUtils.Console;

class Game {
  constructor() {
    this.user = new User();
    this.referee = new Referee();
  }

  computerInputNumber = [];

  startGame() {
    mConsole.print(GAME_MESSAGES.START);
    this.computerInputNumber = this.referee.getComputerNumber();
  }

  getInput() {
    mConsole.readLine(GAME_MESSAGES.INPUT_NUMBER, (pickedNumber) => {
      if (this.user.isValidUser(pickedNumber)) {
        const checkedUser = pickedNumber.split("").map(Number);
        this.checkInput(checkedUser);
      }
    });
  }

  checkInput(userArr) {
    const countResultArr = this.referee.countInput(
      this.computerInputNumber,
      userArr
    );
    this.referee.printResult(countResultArr);
    if (countResultArr[1] === GAME_LENGTH) this.checkRestart();
    this.getInput();
  }

  checkRestart() {
    mConsole.print(GAME_MESSAGES.RESTART);
    mConsole.readLine("", (restartInput) => {
      if (this.user.isRestartNumber(restartInput)) {
        this.restartGame(Number(restartInput));
      }
    });
  }

  restartGame(restartInput) {
    if (restartInput === 1) {
      this.computerInputNumber = this.referee.getComputerNumber();
      this.getInput();
    }
    if (restartInput === 2) {
      mConsole.close();
    }
  }
}

module.exports = Game;
