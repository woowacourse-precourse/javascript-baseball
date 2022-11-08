const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Referee = require("./Referee");

const mConsole = MissionUtils.Console;
const GAME_NUMBER_LENGTH = 3;

class Game {
  constructor() {
    this.user = new User();
    this.referee = new Referee();
  }

  computerInputNumber = [];

  startGame() {
    mConsole.print("숫자 야구 게임을 시작합니다.");
    this.computerInputNumber = this.referee.getComputerNumber();
  }

  getInput() {
    mConsole.readLine("숫자를 입력해주세요 : ", (pickedNumber) => {
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
    if (countResultArr[1] === GAME_NUMBER_LENGTH) this.checkRestart();
    this.getInput();
  }

  checkRestart() {
    mConsole.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
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
