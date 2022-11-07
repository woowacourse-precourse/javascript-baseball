const MissionUtils = require("@woowacourse/mission-utils");

const numberCompare = (computer, user) => {
    let BALL_SCORE = 0;
    let STRIKE_SCORE = 0;
    for (let index = 0; index < computer.length; index++) {
        if (computer[index] === user[index]) {
            STRIKE_SCORE += 1;
        };
        if (computer.indexOf(user[index]) >= 0) {
            BALL_SCORE += 1;
        };
    };
    if (STRIKE_SCORE === 0 && BALL_SCORE === 0) {
        MissionUtils.Console.print('낫싱');
        return false;
    };
    if (STRIKE_SCORE === 3) {
        MissionUtils.Console.print(`${STRIKE_SCORE}스트라이크`);
        return true;
    };
    if (STRIKE_SCORE === 0 && BALL_SCORE > 0) {
        MissionUtils.Console.print(`${BALL_SCORE}볼`);
        return false;
    };
    if (STRIKE_SCORE > 0 && BALL_SCORE - STRIKE_SCORE == 0) {
        MissionUtils.Console.print(`${STRIKE_SCORE}스트라이크`);
        return false
    };
    MissionUtils.Console.print(`${BALL_SCORE - STRIKE_SCORE}볼 ${STRIKE_SCORE}스트라이크`);
    return false;
};

module.exports = numberCompare;