const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const Computer = require('./Computer');
const { NUMBER_LIMIT, MESSAGE, OPTION, RESULT } = require('../constant/baseball');

class Game {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  start() {
    const computerNum = this.computer.makeNumbers();
    this.match(computerNum);
  }

  match(computerNum) {
    Console.readLine(MESSAGE.INPUT, userInput => {
      const isUserInputValid = this.user.validateInput(userInput);

      if (isUserInputValid === false) {
        return this.throwError();
      }

      const { ballCount, strikeCount } = this.getGameResult(computerNum, userInput);
      this.renderGameMessage(ballCount, strikeCount);

      if (strikeCount !== NUMBER_LIMIT) {
        return this.match(computerNum);
      }

      this.askUserToRestart();
    });
  }

  getGameResult(computerNum, userInput) {
    const splittedComputerNum = [...computerNum];
    const splittedUserInput = [...userInput];

    const ballCount = splittedComputerNum.reduce((ballCount, currNum, index) => {
      const currNumIndex = splittedUserInput.indexOf(currNum);
      const isBall = currNumIndex !== -1 && currNumIndex !== index;

      if (isBall) ballCount += 1;
      return ballCount;
    }, 0);

    const strikeCount = splittedComputerNum.reduce((strikeCount, currNum, index) => {
      const isStrike = currNum === splittedUserInput[index];

      if (isStrike) strikeCount += 1;
      return strikeCount;
    }, 0);

    return { ballCount, strikeCount };
  }

  renderGameMessage(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return Console.print(RESULT.NOTHING);
    }

    const ballMessage = ballCount !== 0 ? `${ballCount}${RESULT.BALL}` : '';
    const strikeMessage = strikeCount !== 0 ? `${strikeCount}${RESULT.STRIKE}` : '';
    const gameMessage = `${ballMessage} ${strikeMessage}`;

    Console.print(gameMessage);
  }

  askUserToRestart() {
    Console.print(MESSAGE.SUCCESS);

    Console.readLine(MESSAGE.END, userInput => {
      if (userInput === OPTION.RESTART) {
        return this.replay();
      }

      if (userInput === OPTION.EXIT) {
        return this.exit();
      }

      this.throwError();
    });
  }

  replay() {
    this.start();
  }

  exit() {
    Console.close();
  }

  throwError() {
    throw new Error(MESSAGE.ERROR);
  }
}

module.exports = Game;
