const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE, GAME_RULE } = require("./constants");
const checkValidation = require("./utils/checkValidation");
const getPrintScore = require("./utils/getPrintScore");
const getStrikeBallCount = require("./utils/getStrikeBallCount");
const setRandomNumber = require("./utils/setRandomNumber");

class App {
  computerInput;
  userInput;

  score = {
    STRIKE: 0,
    BALL: 0,
  };

  resetScore() {
    this.score = {
      STRIKE: 0,
      BALL: 0,
    };
  }

  play() {
    Console.print(GAME_MESSAGE.START);
    this.generateComputerInput();
  }

  generateComputerInput() {
    this.computerInput = setRandomNumber();
    this.generateUserInput();
  }

  generateUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (answer) => {
      checkValidation(answer);
      this.userInput = answer;
      this.calculationScore();
    });
  }

  calculationScore() {
    this.resetScore();

    const score = getStrikeBallCount(this.computerInput, this.userInput);
    this.score.STRIKE = score[0];
    this.score.BALL = score[1];

    Console.print(score);

    this.printScoreMessage();
  }

  printScoreMessage() {
    const scoreResultMessage = getPrintScore(this.score);

    Console.print(scoreResultMessage);

    if (this.score.STRIKE === GAME_RULE.LENGTH) {
      Console.print(GAME_MESSAGE.CORRECT);

      return this.gameRePlayCheck();
    }

    return this.generateUserInput();
  }

  gameRePlayCheck() {
    Console.readLine(GAME_MESSAGE.REPLAY_CHECK, (answer) => {
      if (answer === GAME_RULE.RESTART) {
        return this.generateComputerInput();
      }

      if (answer === GAME_RULE.END) {
        return Console.close();
      }

      return this.inputErrorException();
    });
  }

  inputErrorException() {
    throw new Error(GAME_MESSAGE.INVALID_INPUT_EXCEPTION);
  }
}

module.exports = App;
