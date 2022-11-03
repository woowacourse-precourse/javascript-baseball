const MissionUtils = require("@woowacourse/mission-utils");

class RandomNum {
  creatNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);
  }
}

const randomNum = new RandomNum();
randomNum.creatNum();

module.exports = RandomNum;
