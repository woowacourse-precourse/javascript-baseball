const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME } = require("./constants");

const showStartMessage = () => {
  Console.print(MESSAGE.START);
}

const showCountMessage = (ballCount, strikeCount) => {
  if (ballCount === 0) {
    Console.print(`${strikeCount}${MESSAGE.STRIKE}`);
  } else if (strikeCount === 0) {
    Console.print(`${ballCount}${MESSAGE.BALL}`);
  } else {
    Console.print(`${ballCount}${MESSAGE.BALL} ${strikeCount}${MESSAGE.STRIKE}`);
  }
}

const showNothingMessage = () => {
  Console.print(MESSAGE.NOTHING);
}

const showCorrectMessage = () => {
  Console.print(`${GAME.LENGTH}${MESSAGE.STRIKE}`);
  Console.print(MESSAGE.SUCCESS);
}

module.exports = { showStartMessage, showCountMessage, showNothingMessage, showCorrectMessage };