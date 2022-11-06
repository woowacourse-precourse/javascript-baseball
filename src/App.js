const MissionUtils = require("@woowacourse/mission-utils");

const mConsole = MissionUtils.Console;
const mRandom = MissionUtils.Random;
const GAME_NUMBER_LENGTH = 3;

class App {
  play() {
    this.startGame();
    this.getInput();
  }

  startGame() {
    mConsole.print("숫자 야구 게임을 시작합니다.");
  }

  getInput() {
    mConsole.readLine("숫자를 입력해주세요 : ", (pickedNumber) => {
      if (this.checkInputNumber(pickedNumber)) {
        pickedNumber;
      }
    });
  }

  checkScope(input) {
    if (input.includes(0)) throw "0이 아닌 1~9 사이 숫자를 입력해주세요.";
  }

  checkType(input) {
    if (isNaN(input)) throw "숫자를 입력해주세요.";
  }

  checkLength(input) {
    if (input.length !== GAME_NUMBER_LENGTH)
      throw `${GAME_NUMBER_LENGTH}개의 숫자를 입력해주세요.`;
  }

  checkDuplicatedInput(input) {
    if (input.length !== new Set(input).size)
      throw "서로 다른 숫자를 입력해주세요.";
  }

  checkInputNumber(input) {
    this.checkScope(input);
    this.checkType(input);
    this.checkLength(input);
    this.checkDuplicatedInput(input);

    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
