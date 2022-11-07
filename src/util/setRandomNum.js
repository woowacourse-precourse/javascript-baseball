const MissionUtils = require("@woowacourse/mission-utils");
const {ANSWER_LENGTH} = require("../constant/constant");

const setRamdomNum = () => {
    const randomNum1 = [];
    randomNum1.push(MissionUtils.Random.pickNumberInRange(1, 9));
    while (randomNum1.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum1.indexOf(number)===-1) {
        randomNum1.push(number);
      }
    }
    return randomNum1.join("");
};
module.exports = setRamdomNum;