const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const error = require('./Error');

class Interaction {
  constructor() {
    this.answer;
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  printPlayInputMessage() {
    return new Promise(this.handleReadLinePromise);
  }

  handleReadLinePromise(resolve) {
    Console.readLine('숫자를 입력해 주세요 :', (inputNumber) => {
      Console.close();
      resolve(inputNumber);
    });
  }

  printPlayResult(resultMap) {
    if (resultMap.strike === 3) {
      Console.log('정답입니다.');
    }
  }

  checkValidNumberInput(inputNumber) {
    return new Promise((resolve, reject) => {
      console.log(this);
      if (!error.isValidResponse(inputNumber)) {
        throw new Error('숫자 세자리이상');
      }

      resolve(inputNumber);
    });
  }
}

module.exports = Interaction;
