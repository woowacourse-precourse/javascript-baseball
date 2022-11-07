const MissionUtils = require("@woowacourse/mission-utils");
const computerNum = function () {
  const pickedNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  randomNumArr.push(pickedNum);

  console.log(`\n \n ${randomNumArr} `);
};

let randomNumArr = [];
computerNum();

exports.computerNum = computerNum;
exports.randomNumArr = randomNumArr;
