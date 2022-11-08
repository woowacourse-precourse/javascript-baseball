const MissionUtils = require('@woowacourse/mission-utils');
const InputValidation = require('./utils/InputValidation');

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
      if (InputValidation.isValidInput(answer)) {
        userNumber = answer.split('');
        //게임 시작하는 메서드 호출
      } else {
        MissionUtils.Console.print('오류로 인하여 게임을 종료합니다.');
      }
    });
  }

  play() {}
}

module.exports = App;
