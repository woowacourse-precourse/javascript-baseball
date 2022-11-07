const { Console, Random } = require('@woowacourse/mission-utils');
const config = require('./config');

const generateTargetNumber = () => {
    const { RANGE_MIN, RANGE_MAX, NUM_LENGTH } = config.GAME_RANGE;
    const targetNumberArr = [];

    while (targetNumberArr.length < NUM_LENGTH) {
        const randNum = Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
        if (!targetNumberArr.includes(randNum)) targetNumberArr.push(randNum);
        if (targetNumberArr.length === NUM_LENGTH) break;
    }
    return targetNumberArr.join('');
};

const findStrikeBall = (target, input) => {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < target.length; i += 1) {
        if (target[i] === input[i]) strike += 1;
        else if (target.includes(input[i])) ball += 1;
    }
    return { strike, ball };
};

const makePhrase = (strike, ball) => {
    const { NOTHING, BALL, STRIKE } = config.MATCH_TYPE;

    if (strike === 0 && ball === 0) return NOTHING;
    if (strike === 0) return `${ball}${BALL}`;
    if (ball === 0) return `${strike}${STRIKE}`;

    return `${ball}${BALL} ${strike}${STRIKE}`;
};

const printPhrase = (catchPhrase) => Console.print(catchPhrase);

module.exports = {
    generateTargetNumber, findStrikeBall, makePhrase, printPhrase
};
