const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = this.getAnswer();
  }

  getAnswer() {
    let answer = {};
    let index = 1;

    while (index <= 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (answer[number] === undefined) {
        answer[number] = index;
        index += 1;
      }
    }

    return answer;
  }

  play() {}
}

module.exports = App;
