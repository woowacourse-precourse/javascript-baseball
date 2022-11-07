const { Console } = require('@woowacourse/mission-utils');
const generateNumber = require('./generateNumber');
const validateInputValue = require('./validator');
const compareTwoArrayResult = require('./compare');

class App {
  play() {
    this.startMessage();
    this.makeComputerNumArr();
  }

  makeComputerNumArr() {
    this.computerNumArr = generateNumber();
    this.getInputAndCompare();
  }

  startMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputAndCompare() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      const { computerNumArr } = this;
      const isInputValidate = validateInputValue(input);
      if (typeof isInputValidate !== 'boolean') return this.wrongInput(isInputValidate);
      const inputNumArr = input.split('').map(element => +element);
      const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
      Console.print(gameResult);
      return this.isGameOver(gameResult);
    });
  }

  isGameOver(result) {
    if (result !== '3스트라이크') {
      return this.getInputAndCompare();
    }
    return this.endOrRetry();
  }

  endOrRetryMessage() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  endOrRetry() {
    this.endOrRetryMessage();
    Console.readLine('', input => {
      this.checkOneOrTwo(input);
    });
  }

  checkOneOrTwo(answer) {
    if (answer === '1') {
      return this.makeComputerNumArr();
    }
    if (answer === '2') {
      return this.close();
    }
    return this.wrongInput('1또는 2를 입력해주세요!');
  }

  wrongInput(errMessage) {
    throw new Error(errMessage);
  }

  close() {
    Console.close();
  }
}

module.exports = App;
