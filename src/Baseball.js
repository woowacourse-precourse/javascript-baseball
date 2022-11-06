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

    this.getUserNumber();
  }

  getUserNumber() {
    Console.readLine(SYSTEM_MESSAGE.GET_NUMBER, (userInput) => {
      ErrorCheck.guessError(userInput);

      this.getStrikeBallCount(this.randomNumber, userInput);
    });
  }

  getStrikeBallCount(randomNumber, userInput) {
    const userNumber = userInput.toString();
    let [STRIKE, BALL] = [BASIC_NUMBER.INIT, BASIC_NUMBER.INIT];

    randomNumber
      .map((num) => `${num}`)
      .forEach((num, index) => {
        if (num === userNumber[index]) STRIKE++;
        else if (userNumber.includes(num)) BALL++;
      });

    this.printStrikeBallCountMessage(STRIKE, BALL);
  }
}

exports.Baseball = Baseball;
