const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./gameUtils.js");
const print = require("./print.js");
const constants = require("./data/constants.js");

class App {
  play() {
    this.answer = GameUtils.System.answer;
    console.log(this.answer);
    print.start();
    this.submitInput();
  }
  submitInput() {
    let userInput;
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.INPUT, (input) => {
      userInput = input.trim().split('').map(number => +number);
      GameUtils.Validator.isVaildAnswer(userInput);
      const result = GameUtils.System.getResult(userInput, this.answer);
      print.result(result);
      this.isClear(result.strike);
    });
  }
  isClear(score) {
    if(score !== constants.CLEAR_CONDITION) this.submitInput();
    this.clearGame();
  }
  clearGame() {   
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.CLEAR, (submit) => {
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