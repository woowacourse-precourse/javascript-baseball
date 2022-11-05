const MissionUtils = require('@woowacourse/mission-utils');
const generateNumber = require('./generateNumber');
const validateInputValue = require('./validator');
const compareTwoArrayResult = require('./compare');

class App {
  play() {
    this.start();
    this.computerNumArr = generateNumber();
    this.getInputAndCompare();
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputAndCompare() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      try {
        const { computerNumArr } = this;
        const isInputValidate = validateInputValue(input);
        const inputNumArr = input.split('').map(element => +element);
        const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
        MissionUtils.Console.print(gameResult);
        this.isGameOver(gameResult);
      } catch (error) {
        this.wrongInput(error);
      }
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
      try {
        const endOrRetryInput = this.isValidEndOrRetryInput(input);
        if (endOrRetryInput === 1) {
          this.play();
        }
        if (endOrRetryInput === 2) {
          MissionUtils.Console.close();
        }
      } catch (error) {
        this.wrongInput(error);
      }
    });
  }

  isValidEndOrRetryInput(answer) {
    if (answer === '1' || answer === '2') {
      return Number(answer);
    }
    throw new Error('1또는 2를 입력해주세요.');
  }

  wrongInput(err) {
    MissionUtils.Console.print(err);
    MissionUtils.Console.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
