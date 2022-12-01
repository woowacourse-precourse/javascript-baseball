const MissionUtils = require('@woowacourse/mission-utils');
const { GAME } = require('./Constant');

const RandomNumberGenerator = {
  generate() {
    const computer = [];
    while (computer.length < GAME.LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

module.exports = RandomNumberGenerator;

