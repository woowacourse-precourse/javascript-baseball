const MissionUtils = require('@woowacourse/mission-utils');

class App {
  createNumberList() {
    const numberList = [];
    while (numberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberList.includes(number)) numberList.push(number);
    }
    return numberList;
  }

  printStartPhrase() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  receiveNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      throwException(input);
    });
  }

  throwException(input) {
    if (input.length !== 3 || isNaN(input)) throw 'Error';
    input.split('').reduce((acc, cur) => {
      if (acc.includes(cur)) throw 'Error';
      return acc + cur;
    }, '');
  }

  play() {
    this.printStartPhrase();
    this.receiveNumber();
  }
}

module.exports = App;
