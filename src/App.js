class App {
  play() {
    const MissionUtils = require('@woowacourse/mission-utils');
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
  }
}

module.exports = App;
