const MissionUtils = require('@woowacourse/mission-utils');
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
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputAndCompare() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      const { computerNumArr } = this;
      const isInputValidate = validateInputValue(input);
      if (typeof isInputValidate !== 'boolean') return this.wrongInput(isInputValidate);
      const inputNumArr = input.split('').map(element => +element);
      const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
      MissionUtils.Console.print(gameResult);
      return this.isGameOver(gameResult);
    });
  }

  isGameOver(result) {
    if (result !== '3스트라이크') {
      return this.getInputAndCompare();
    }
    return this.endOrRetry();
  }

  endOrRetry() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', input => {
      const endOrRetryInput = this.isValidEndOrRetryInput(input);
      if (endOrRetryInput === 1) {
        return this.makeComputerNumArr();
      }
      if (endOrRetryInput === 2) {
        return this.close();
      }
      return this.wrongInput(endOrRetryInput);
    });
  }

  isValidEndOrRetryInput(answer) {
    if (answer === '1' || answer === '2') {
      return Number(answer);
    }
    return '1또는 2를 입력해주세요.';
  }

  wrongInput(errMessage) {
    throw new Error(errMessage);
  }

  close() {
    MissionUtils.Console.close();
  }
}

module.exports = App;
