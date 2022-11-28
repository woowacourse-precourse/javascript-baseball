const { MissionUtils } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  generate() {
    const computer = [];
    while (computer.length < 3) {
      MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

module.exports = RandomNumberGenerator;
