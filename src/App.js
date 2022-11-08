const MissionUtils = require("@woowacourse/mission-utils");
const isValidUser = require("./modules/isValidUser");
const getComputerNumber = require("./modules/getComputerNumber");
const countInput = require("./modules/countInput");
const printResult = require("./modules/printResult");
const isRestartNumber = require("./modules/isRestartNumber");

const mConsole = MissionUtils.Console;
const GAME_NUMBER_LENGTH = 3;

class App {
  computerInputNumber = [];

  play() {
    this.startGame();
    this.getInput();
  }

  startGame() {
    mConsole.print("숫자 야구 게임을 시작합니다.");
    this.computerInputNumber = getComputerNumber();
  }

  getInput() {
    mConsole.readLine("숫자를 입력해주세요 : ", (pickedNumber) => {
      if (isValidUser(pickedNumber)) {
        const checkedUser = pickedNumber.split("").map(Number);
        this.checkInput(checkedUser);
      }
    });
  }

  checkInput(userArr) {
    const countResultArr = countInput(this.computerInputNumber, userArr);
    printResult(countResultArr);
    if (countResultArr[1] === GAME_NUMBER_LENGTH) this.checkRestart();
    this.getInput();
  }

  checkRestart() {
    mConsole.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    mConsole.readLine("", (restartInput) => {
      if (isRestartNumber(restartInput)) {
        this.restartGame(Number(restartInput));
      }
    });
  }

  restartGame(restartInput) {
    if (restartInput === 1) {
      this.computerInputNumber = getComputerNumber();
      this.getInput();
    }
    if (restartInput === 2) {
      mConsole.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
