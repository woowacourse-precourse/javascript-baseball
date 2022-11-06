const MissionUtils = require("@woowacourse/mission-utils");

function generateComputerNum() {
    const RANDOM_NUM_ARR = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    return RANDOM_NUM_ARR;
}

module.exports.generateComputerNum = generateComputerNum;