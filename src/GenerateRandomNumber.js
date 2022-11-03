const MissionUtils = require("@woowacourse/mission-utils");

function generateComputerNum() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
}

module.exports = generateComputerNum;