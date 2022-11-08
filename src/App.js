const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.printGreeting();
  }

  printGreeting() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRandomNumber() {
    let randomNumSet = new Set();
    while (3) {
      randomNumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(randomNumSet);
  }

  getUserNumber() {
    let userNumber = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      userNumber = answer.split('');
    });
    return userNumber;
  }

  play() {}
}

module.exports = App;
