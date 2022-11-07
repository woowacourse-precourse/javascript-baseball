const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, CHOICE } = require('./Constant');
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

  enterReplayChooseMode() {
    Console.readLine(MESSAGE.ASK_RESTART, (playerChoice) => {
      BaseballGameTools.errorIfInvalidChoiceFormat(playerChoice);

      if (playerChoice === CHOICE.PLAY_AGAIN) {
        this.shuffleNumber();
        this.enterGuessMode();
      } else if (playerChoice === CHOICE.EXIT) {
        Console.close();
      } else {
        throw Error(MESSAGE.FORMAT_ERROR_CHOICE);
      }
    });
  }
}

module.exports = App;
