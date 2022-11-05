const MissionUtils = require("@woowacourse/mission-utils");
const print = require("./print.js");
const game = require("./game.js");
const validator = require("./validator.js");
const constants = require("./data/constants.js");

class App {
  play() {
    print.start();
    this.answer = game.getAnswer();
    console.log(this.answer);
    this.submitInput();
  }
  submitInput() {
    let userInput;
    MissionUtils.Console.readLine(constants.MESSAGE.INPUT, (input) => {
      userInput = input.trim().split('').map(number => +number);
      validator.isVaild(userInput);      
      const resultCalculator = new game.ResultCalculator;
      const result = resultCalculator.getResult(userInput, this.answer);
      print.result(result);
      if(result.strike !== 3) return this.submitInput();
      this.clearGame();
    });
  }
  clearGame() {   
    MissionUtils.Console.readLine(constants.MESSAGE.CLEAR, (submit) => {
      validator.isVaildRestartSubmit(submit);
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
