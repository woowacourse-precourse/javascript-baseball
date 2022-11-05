const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.ANSWER_NUMBER = [];
    this.playFirstTime = true;
  }

  play() {
    if (this.playFirstTime) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.createAnswerNumber();
  }

  createAnswerNumber() {
    this.ANSWER_NUMBER = [];
    while (this.ANSWER_NUMBER.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.ANSWER_NUMBER.includes(randomNumber)) {
        this.ANSWER_NUMBER.push(randomNumber);
      }
    }
  }
}

module.exports = App;
