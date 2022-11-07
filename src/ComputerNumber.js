const MissionUtils = require("@woowacourse/mission-utils");

const computerNumber = () => {
    const NUMBER = [];
    while (NUMBER.length !== 3) {
        NUMBER.push(String(MissionUtils.Random.pickNumberInRange(1, 9)));
    };
    return NUMBER;
};

module.exports = computerNumber;