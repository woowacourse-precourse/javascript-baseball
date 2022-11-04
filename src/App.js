const MissionUtils = require("@woowacourse/mission-utils");

const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";

class App {
  constructor() {
    this.number = "";
  }
  getUserInput() {
    MissionUtils.Console.readLine(INPUT_MESSAGE, (number) => {
      this.number = number;
      this.isInputValid();
      this.getUserInput();
    });
  }

  isInputValid() {
    if (this.number === "")
      throw new Error("잘못된 값을 입력하여 게임을 종료합니다.");
  }

  printGameStartMessage() {
    MissionUtils.Console.print(GAME_START_MESSAGE);
    this.getUserInput();
  }

  play() {
    this.printGameStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
