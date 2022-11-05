const MissionUtils = require("@woowacourse/mission-utils");

const createRandomNumbers = () => {
    let RandomNums = [];

    while (RandomNums.length < 3) {
        const randonNum = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!RandomNums.includes(randonNum)) {
            RandomNums.push(randonNum);
        }
    }
    return RandomNums;
}

module.exports = createRandomNumbers;