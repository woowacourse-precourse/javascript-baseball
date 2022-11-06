const MissionUtils = require("@woowacourse/mission-utils");

const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const RETURN_COUNT = 3;

function generateRandomNumber() {
    const computer = [];
    while (computer.length < RETURN_COUNT) {
        const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer;
}

module.exports = generateRandomNumber;