const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./gameUtils.js");
const print = require("./print.js");
const constants = require("./data/constants.js");

class App {
  play() {
    print.start();
    this.answer = GameUtils.System.answer;
    console.log(this.answer);
    this.submitInput();
  }
  submitInput() {
    let userInput;
    MissionUtils.Console.readLine(constants.MESSAGE.INPUT, (input) => {
      userInput = input.trim().split('').map(number => +number);
      GameUtils.Validator.isVaildAnswer(userInput);
      const result = GameUtils.System.getResult(userInput, this.answer);
      print.result(result);
      if(result.strike !== 3) return this.submitInput();
      this.clearGame();
    });
  }
  clearGame() {   
    MissionUtils.Console.readLine(constants.MESSAGE.CLEAR, (submit) => {
      GameUtils.Validator.isVaildRestartSubmit(submit);
      if(+submit === 1) app.play();
      if(+submit === 2) {
        print.gameover();
        MissionUtils.Console.close();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;