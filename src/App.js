const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./GameUtils.js");
const Print = require("./Print.js");
const constants = require("./data/constants.js");

class App {
  play() {
    this.answer = GameUtils.System.getRandomAnswer();
    console.log(this.answer);
    Print.GameMessage.start();
    this.submitInput();
  }
  submitInput() {
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.INPUT, (input) => {
      input = GameUtils.System.toFilterdArray(input);
      GameUtils.Validator.isVaildAnswer(input);
      const result = GameUtils.System.getResult(input, this.answer);
      Print.GameMessage.result(result);
      this.isClear(result.strike);
    });
  }
  isClear(score) {
    if(score !== constants.CLEAR_CONDITION) this.submitInput();
    this.clearGame();
  }
  clearGame() {   
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.CLEAR, (submit) => {
      GameUtils.Validator.isVaildRestartSubmit(+submit);
      this.isRestart(+submit);
    });
  }
  isRestart(submit) {    
    if(+submit === 1) this.play();
    if(+submit === 2) {
      Print.GameMessage.gameover();
      MissionUtils.Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;