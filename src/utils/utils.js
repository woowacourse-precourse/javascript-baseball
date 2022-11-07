const { Random } = require("@woowacourse/mission-utils");
const { MAX_NUMBER } = require("../constant/constant");

module.exports = {
  computerUniqueThreeNumbers() {
    const computer = [];
    while (computer.length < MAX_NUMBER) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};
