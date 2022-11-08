const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.userNumber = '';
    this.answer = '';
    this.ball = 0;
    this.strike = 0;
  }

  // 기능 1.사용자에게 값을 입력받는 함수
  getUserNumber() {
    return new Promise((resolove, reject) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
        if (!this.checkValidityUserNumber(number)) {
          throw new Error('입력값이 올바르지 않습니다.');
        }

        resolove(number);
      });
    });
  }

  // 기능 2. 입력값의 유효성을 판단하는 함수
  checkValidityUserNumber(number) {
    const userNumber = parseInt(number, 10);
    number = this.checkDuplicateNumber(number);

    if (number.length !== 3) {
      return false;
    } else if (userNumber < 123 || userNumber > 987) {
      return false;
    }

    return true;
  }

  checkDuplicateNumber(str) {
    let newStr = new Set(str);
    newStr = [...new Set(str)];
    newStr = [...new Set(str)].join('');

    return newStr;
  }

  getRandomNumber() {}

  countHint() {}

  printResult() {}

  finishOrRestart() {}

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.userNumber = await this.getUserNumber();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
