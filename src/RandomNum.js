const MissionUtils = require("@woowacourse/mission-utils");

class RandomNum {
  constructor(randomNumArr) {
    this.randomNumArr = randomNumArr;
  }

  creatNum() {
    const computerNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(computerNumArr.toString());
    return computerNumArr;
  }
}

const randomNum = new RandomNum();
randomNum.creatNum();

module.exports = RandomNum;
