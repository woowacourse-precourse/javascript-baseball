const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Computer = require("./Computer");

class App {
  constructor() {
    this.isUserWrong = false;
    this.isFirstPlay = true;
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    if (this.isFirstPlay) {
      this.start();
    }
    this.computerAnswer = this.computer.generateDifferRandomNumArr(3);
    this.askUser();
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.isFirstPlay = false;
  }

  askUser() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const USER_INPUT_ARR = this.user.convertNumToArr(userInput);
      const IS_USER_INPUT_VALID = this.user.checkUserInputValid(USER_INPUT_ARR);
      if (IS_USER_INPUT_VALID === false) {
        throw new Error();
      }
      const SCORE = this.computer.scoreUserInput(
        this.computerAnswer,
        USER_INPUT_ARR
      );
      this.isUserWrong = this.computer.getHintOfAnswer(SCORE);
      if (this.isUserWrong) {
        return this.askUser();
      }
      this.checkIfRestartGame();
    });
  }

  checkIfRestartGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (userInput) => {
        if (userInput === "1") {
          return this.play();
        }
        if (userInput === "2") {
          this.isPlaying = false;
          return MissionUtils.Console.close();
        }
      }
    );
  }
}

module.exports = App;
const app = new App();
app.play();
