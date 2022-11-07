exports.setRandomNum = function setRandomNum() {
  const MissionUtils = require("@woowacourse/mission-utils");
  let randomNum;
  let randomNumArr = [];

  while (randomNumArr.length < 3) {
    randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    randomNumArr.push(randomNum);
  }

  return randomNumArr;
};
