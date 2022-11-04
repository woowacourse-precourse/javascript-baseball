const MissionUtils = require("@woowacourse/mission-utils");

const GAME_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
});

const GAME_ERROR_MESSAGE = Object.freeze({
  BLANK: "아무것도 입력되지 않았습니다.",
  DUPLICATE: "중복된 숫자가 있습니다.",
});

class App {
  constructor() {
    this.number = "";
  }
  getUserInput() {
    MissionUtils.Console.readLine(GAME_MESSAGE.INPUT, (number) => {
      this.number = number;
      this.isInputValid();
      this.getUserInput();
    });
  }

  isInputValid() {
    if (this.number === "") throw new Error(GAME_ERROR_MESSAGE.BLANK);
    if ([...new Set(this.number.split(""))].length !== 3)
      throw new Error(GAME_ERROR_MESSAGE.DUPLICATE);
  }

  printGameStartMessage() {
    MissionUtils.Console.print(GAME_MESSAGE.START);
    this.getUserInput();
  }

  play() {
    this.printGameStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
