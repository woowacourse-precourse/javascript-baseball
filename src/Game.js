const { Console } = require('@woowacourse/mission-utils');
const { isValidNumbers, isOneOrTwo } = require('./utils/validate/validate.js');
const generateRandomNumberArray = require('./utils/game/generateRandomNumber.js');
const generateResultThisTurn = require('./utils/game/result.js');
const GAME_MESSAGE = require('./utils/constants/constant.js');

class Game {
  constructor() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
    this.generateNumberArrayByComputer();
  }

  generateNumberArrayByComputer() {
    this.pickedNumberArrayByComputer = generateRandomNumberArray();
  }

  start() {
    Console.readLine(GAME_MESSAGE.ENTER_NUMBER, this.playTurn);
  }

  playTurn = (numberEnteredByUser) => {
    this.numberEnteredByUser = numberEnteredByUser;
    isValidNumbers(this.numberEnteredByUser);
    const numberArrayEnteredByUser = this.numberEnteredByUser.split('').map(Number);
    const resultThisTurn = generateResultThisTurn(this.pickedNumberArrayByComputer, numberArrayEnteredByUser);

    if (resultThisTurn === GAME_MESSAGE.ANSWER) {
      this.askRestart();
      return;
    }
    this.start();
  };

  askRestart() {
    Console.readLine(GAME_MESSAGE.RESTART_MESSAGE, (willingnessToRestart) => {
      isOneOrTwo(willingnessToRestart);
      this.processRestartOrShutdown(willingnessToRestart);
    });
  }

  processRestartOrShutdown(willingnessToRestart) {
    if (willingnessToRestart === GAME_MESSAGE.RETRY) {
      this.generateNumberArrayByComputer();
      this.start();
      return;
    }
    Console.print(GAME_MESSAGE.END_MESSAGE);
    Console.close();
  }
}

module.exports = Game;
