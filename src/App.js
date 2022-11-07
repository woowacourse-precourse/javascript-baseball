const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() { }

  computerRandomNumber() {
    let computerNumber = [];
    while (computerNumber.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(NUMBER)) {
        computerNumber.push(NUMBER);
      }
    }
    return computerNumber;
  };

}

module.exports = App;
