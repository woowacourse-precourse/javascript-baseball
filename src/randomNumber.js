exports.setRandomNum = function setRandomNum() {
  const MissionUtils = require("@woowacourse/mission-utils");
  let randomNum;
  let randomNumArr = [];
  let cnt = 0;

  while (cnt < 3) {
    randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumArr.includes(randomNum)) {
      randomNumArr.push(randomNum);
      cnt++;
    }
  }

  return randomNumArr;
};
