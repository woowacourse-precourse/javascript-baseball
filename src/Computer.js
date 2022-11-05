const MissionUtils = require("@woowacourse/mission-utils");
class Computer {
  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.includes(number) || computer.push(number);
    }
    return computer;
  }
}
module.exports = Computer;
