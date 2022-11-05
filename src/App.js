class App {
  play() {
    const MissionUtils = require('@woowacourse/mission-utils');
    const computer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

module.exports = App;
