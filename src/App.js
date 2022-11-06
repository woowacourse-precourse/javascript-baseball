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
  play() {
    this.printStartPhrase();
  }
}

module.exports = App;
