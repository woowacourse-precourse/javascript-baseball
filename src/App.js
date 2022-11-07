const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');
const BaseballGameTools = require('./BaseballGameTools');

class App {
  constructor() {
    this.answerArray = [];
  }

  shuffleNumber() {
    this.answerArray = BaseballGameTools.getThreeNumber();
  }

  enterGuessMode() {
    Console.readLine(MESSAGE.ASK_GUESS, (playerGuess) => {
      BaseballGameTools.errorIfInvalidGuessFormat(playerGuess);
      const baseballResult = BaseballGameTools
        .getBaseballResultMessage(this.answerArray, playerGuess);
      Console.print(baseballResult);

      if (baseballResult === MESSAGE.THREE_STRIKE) {
        Console.print(MESSAGE.GAME_CLEAR);
        this.enterReplayChooseMode();
      } else {
        this.enterGuessMode();
      }
    });
  }
}

module.exports = App;
