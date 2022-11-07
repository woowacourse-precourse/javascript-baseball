const { Random } = require('@woowacourse/mission-utils');
const config = require('./config');

const generateTargetNumber = () => {
    const { RANGE_MIN, RANGE_MAX, NUM_LENGTH } = config.GAME_RANGE;
    return Random.pickUniqueNumbersInRange(RANGE_MIN, RANGE_MAX, NUM_LENGTH).join('');
};

const findStrikeBall = (target, input) => {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < target.length; i += 1) {
        if (target[i] === input[i]) strike += 1;
        else if (target.includes(input[i])) ball += 1;
    }
    console.log(strike, ball);
    return { strike, ball };
};

const makePhrase = (strike, ball) => {
    const { NOTHING, BALL, STRIKE } = config.MATCH_TYPE;

    if (strike === 0 && ball === 0) return NOTHING;
    if (strike === 0) return `${ball}${BALL}`;
    if (ball === 0) return `${strike}${STRIKE}`;

    return `${strike}${STRIKE} ${ball}${BALL}`;
};
module.exports = { findStrikeBall, makePhrase };