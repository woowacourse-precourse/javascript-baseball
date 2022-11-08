const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/constants");

function printResultMessage(ball, strike) {
    Console.print(`${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`);
}

module.exports = printResultMessage;
