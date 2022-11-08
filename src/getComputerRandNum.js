const MissionUtils = require("@woowacourse/mission-utils");

function getComputerRandNum() {
  const computerNum = [];
  while (computerNum.length < 3) {
    const randNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(randNum)) {
      computerNum.push(randNum);
    }
  }
  return computerNum;
}

module.exports = getComputerRandNum;
