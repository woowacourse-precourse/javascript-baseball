const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE } = require("./constants");
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
    this.generateUserInput();
  }

  generateComputerInput() {
    this.computerInput = setRandomNumber();

    return this.computerInput;
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

    this.printScoreMessage();
  }

  printScoreMessage() {
    const scoreResultMessage = getPrintScore(this.score);

    Console.print(scoreResultMessage);
  }
}

module.exports = App;
