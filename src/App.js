class App {
  getRandomNumber() {
    const MissionUtils = require('@woowacourse/mission-utils');
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  play() {}
}

module.exports = App;
