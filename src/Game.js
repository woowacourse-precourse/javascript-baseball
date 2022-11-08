const { Console } = require('@woowacourse/mission-utils');
const { isValidNumbers, isOneOrTwo } = require('./utils/validate/validate.js');
const generateRandomNumberArray = require('./utils/game/generateRandomNumber.js');
const generateResultThisTurn = require('./utils/game/result.js');

class Game {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.generateNumberArrayByComputer();
    console.log(this.pickedNumberArrayByComputer);
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
      this.askRestart();
      return;
    }
    this.start();
  };

  askRestart() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (willingnessToRestart) => {
      isOneOrTwo(willingnessToRestart);
      if (willingnessToRestart === '1') {
        this.generateNumberArrayByComputer();
        this.start();
        return;
      }
      Console.print('게임 종료');
      Console.close();
    });
  }
}

module.exports = Game;
