const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Computer = require("./Computer");

class App {
  constructor() {
    this.isPlaying = false;
    this.isFirstPlay = true;
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.isFirstPlay = false;
  }

  async play() {
    if (this.isFirstPlay) {
      this.start();
    }
    this.isPlaying = true;
    const USER = new User();
    const COMPUTER = new Computer();
    const COMPUTER_ANSWER = COMPUTER.generateDifferRandomNumArr(3);
    while (this.isPlaying) {
      const USER_INPUT = await USER.getUserInput();
      const RESULT = COMPUTER.scoreUserInput(COMPUTER_ANSWER, USER_INPUT);
      this.isPlaying = COMPUTER.getHintOfAnswer(RESULT);
    }
    this.checkIfRestartGame();
  }

  checkIfRestartGame() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
        (userInput) => {
          if (userInput == 1) {
            resolve(this.play());
          }
          if (userInput == 2) {
            this.isPlaying = false;
            resolve(MissionUtils.Console.close());
          }
        }
      );
    });
  }
}

module.exports = App;
const app = new App();
app.play();
