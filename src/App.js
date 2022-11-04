const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = this.getAnswer();
  }

  getAnswer() {
    let answer = [];

    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer;
  }

  play() {}
}

module.exports = App;
