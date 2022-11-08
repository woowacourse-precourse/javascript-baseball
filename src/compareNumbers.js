
const { OUTPUT_MESSAGE } = require('./constantValue');

function compareNumbers(strike, ball) {
    if (strike === 3) {
        return OUTPUT_MESSAGE.CORRECT_ANSWER;
    }
    if (ball > 0 && strike === 0) {
        return `${ball}${OUTPUT_MESSAGE.BALL}`;
    }
    if (strike > 0 && ball === 0) {
        return `${strike}${OUTPUT_MESSAGE.STRIKE}`;
    }
    if (ball > 0 && strike > 0) {
        return `${ball}${OUTPUT_MESSAGE.BALL} ${strike}${OUTPUT_MESSAGE.STRIKE}`;
    }

    return OUTPUT_MESSAGE.NOTHING;
}

module.exports = compareNumbers;