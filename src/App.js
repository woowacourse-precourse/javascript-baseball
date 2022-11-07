const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./GameUtils");
const Print = require("./Print");
const constants = require("./data/constants");

class App {
  play() {
    this.answer = GameUtils.System.getRandomAnswer();
    console.log(this.answer);
    Print.GameMessage.start();
    this.#submitInput();
  }
  #submitInput() {
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.input, (input) => {
      input = GameUtils.System.toFilterdArray(input);
      const errorMessage = GameUtils.Validator.isInvaildAnswer(input);
      if(errorMessage) Print.GameMessage.error(errorMessage);
      const result = GameUtils.System.getResult(input, this.answer);
      Print.GameMessage.result(result);
      this.#isClear(result.strike);
    });
  }
  #isClear(score) {
    if(score !== constants.CLEAR_CONDITION) this.#submitInput();
    this.#clearGame();
  }
  #clearGame() {   
    MissionUtils.Console.readLine(constants.GAME_MESSAGE.clear, (submit) => {
      const errorMessage = GameUtils.Validator.isInvaildRestartSubmit(Number(submit));
      if(errorMessage) Print.GameMessage.error(errorMessage);
      this.#isRestart(Number(submit));
    });
  }
  #isRestart(submit) {  
    submit = Number(submit);  
    if(submit === 1) this.play();
    if(submit === 2) {
      Print.GameMessage.gameover();
      MissionUtils.Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
