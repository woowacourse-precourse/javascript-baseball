const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/constants");

function printResultMessage(ball, strike) {
  if (strike === 3) {
    Console.print(`${strike}${MESSAGE.STRIKE}`);
  } else if (ball === 0 && strike === 0) {
    Console.print(MESSAGE.NOTHING);
  } else {
    Console.print(`${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`);
  }
}

module.exports = printResultMessage;
