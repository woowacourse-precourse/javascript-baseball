const { BALL_COUNT } = require("./Constants");
const ballAndStrikeMessage = (ball, strike) => {
    const MESSAGE = {
        ball: "",
        strike: "",
    };
    if (ball === 1) {
        MESSAGE.ball = BALL_COUNT.ONE_BALL;
    }
    if (ball === 2) {
        MESSAGE.ball = BALL_COUNT.TWO_BALL;
    }
    if (ball === 3) {
        MESSAGE.ball = BALL_COUNT.THREE_BALL;
    }
    if (strike === 1) {
        MESSAGE.strike = BALL_COUNT.ONE_STRIKE;
    }
    if (strike === 2) {
        MESSAGE.strike = BALL_COUNT.TWO_STRIKE;
    }
    if (strike === 3) {
        MESSAGE.strike = BALL_COUNT.THREE_STRIKE;
    }
    if (strike === 0 && ball === 0) {
        MESSAGE.nothing = BALL_COUNT.NOTHING;
    }
    return MESSAGE;
};
module.exports = ballAndStrikeMessage;
