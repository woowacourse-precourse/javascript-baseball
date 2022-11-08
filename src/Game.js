const { Console } = require('@woowacourse/mission-utils');
const { isValidNumbers, isOneOrTwo } = require('./utils/validate/validate.js');
const generateRandomNumberArray = require('./utils/game/generateRandomNumber.js');
const generateResultThisTurn = require('./utils/game/result.js');

class Game {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.generateNumberArrayByComputer();
  }

  generateNumberArrayByComputer() {
    this.pickedNumberArrayByComputer = generateRandomNumberArray();
  }

  start() {
    Console.readLine('숫자를 입력해주세요 : ', this.playTurn);
  }

  playTurn = (numberEnteredByUser) => {
    this.numberEnteredByUser = numberEnteredByUser;
    isValidNumbers(this.numberEnteredByUser);
    const numberArrayEnteredByUser = this.numberEnteredByUser.split('').map(Number);
    const resultThisTurn = generateResultThisTurn(this.pickedNumberArrayByComputer, numberArrayEnteredByUser);

    if (resultThisTurn === '3스트라이크') {
      return;
    }
    this.start();
  };
}

module.exports = Game;
