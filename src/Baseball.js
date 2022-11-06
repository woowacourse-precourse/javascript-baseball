const { Console } = require('@woowacourse/mission-utils');
const { Computer } = require('../functions/Computer');
const { ErrorCheck } = require('../functions/ErrorCheck');
const { SYSTEM_MESSAGE } = require('../constants/system message');

class Baseball {
  constructor() {
    this.randomNumber = [];
  }

  playGame() {
    Console.print(SYSTEM_MESSAGE.START);
    this.randomNumber = Computer.getRandomNumber();
  }

  getUserNumber() {
    Console.readLine(SYSTEM_MESSAGE.GET_NUMBER, (userInput) => {
      ErrorCheck.guessError(userInput);

      this.getStrikeBallCount(this.randomNumber, userInput);
    });
  }
}

exports.Baseball = Baseball;
