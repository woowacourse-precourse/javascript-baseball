const MissionUtils = require("@woowacourse/mission-utils");
const inputValidation = require("./inputValidation");

class App {
  constructor(inputNum) {
    this.inputNum = inputNum;
  }

  play() {
    this.userInput().then(() => {
      this.checkInputValidation();
    });
  }

  async userInput() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        this.inputNum = input;
        MissionUtils.Console.print(input);
        MissionUtils.Console.close();
        resolve(input);
      });
    });
  }

  checkInputValidation() {
    MissionUtils.Console.print(this.inputNum + "232345");
    inputValidation.checkNoOverlap();
  }
}
const startGame = new App();
startGame.play();

module.exports = App;
