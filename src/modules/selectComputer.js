const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER_LENGTH } = require("../constants");

selectComputer = () => {
  const computer = [];
  while (computer.length < NUMBER_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
};

exports.selectComputer = selectComputer;
