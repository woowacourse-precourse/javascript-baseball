const MissionUtils = require('@woowacourse/mission-utils');
const { BASEBALL_RANGE } = require('./constantValue');

function getRandomNumbers() {
    const Numbers = [];
    while (Numbers.length < BASEBALL_RANGE.MAX_SIZE) {
        const tmpNumber = MissionUtils.Random.pickNumberInRange(
            BASEBALL_RANGE.MINIMUM_VALUE,
            BASEBALL_RANGE.MAXIMUM_VALUE,
        );
        if (!Numbers.includes(tmpNumber)) {
            Numbers.push(tmpNumber);
        }
    }

    return Numbers;
}

module.exports = getRandomNumbers;