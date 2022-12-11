const { Random } = require('@woowacourse/mission-utils');
const { GAME_NUMBER_LENGTH } = require('../constants/GameConfig');
const MakeTargetNumbers = {
  MakeNumbers() {
    const computer = [];
    while (computer.length < GAME_NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }

    return computer;
  },
};

module.exports = MakeTargetNumbers;
