const MissionUtils = require("@woowacourse/mission-utils");
const isValidUser = require("./isValidUser.js");
const getComputerNumber = require("./getComputerNumber.js");
const countInput = require("./countInput.js");

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
        const countResultArr = countInput(
          this.computerInputNumber,
          checkedUser
        );
        this.printResult(countResultArr);
        if (countResultArr[1] === GAME_NUMBER_LENGTH) this.checkRestart();
        this.getInput();
      }
    });
  }

  printResult(count) {
    if (count[1] === GAME_NUMBER_LENGTH) {
      mConsole.print(
        `${GAME_NUMBER_LENGTH}스트라이크\n${GAME_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    } else {
      if (count[0] === 0 && count[1] === 0) mConsole.print("낫싱");
      else
        mConsole.print(
          `${count[0] > 0 ? count[0] + "볼 " : ""}${
            count[1] > 0 ? count[1] + "스트라이크" : ""
          }`.trim()
        );
    }
  }

  checkRestart() {
    mConsole.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    mConsole.readLine("", (restartInput) => {
      if (this.checkRestartNumber(restartInput)) {
        this.restartGame(Number(restartInput));
      }
    });
  }

  checkRestartNumber(restartInput) {
    if (Number(restartInput) < 1 || Number(restartInput) > 2)
      throw "1 또는 2를 입력해주세요.";
    if (isNaN(restartInput)) throw "숫자를 입력해주세요.";
    return true;
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
