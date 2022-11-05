const { Console } = require('@woowacourse/mission-utils');
const inputCheck = require('./Baseball/inputCheck');

class App {
  constructor() {
    this.userInputNum = '';
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userInputNum = answer;
      const IS_VALID_INPUT = inputCheck.checkInputValidation(this.userInputNum);

      if (IS_VALID_INPUT === false) {
        throw new Error('유효하지 않은 숫자를 입력했습니다.');
      }

      if (IS_VALID_INPUT) {
        this.startGame();
      }
    });
  }
}

const NUM_BASEBALL = new App();
NUM_BASEBALL.play();

module.exports = App;
