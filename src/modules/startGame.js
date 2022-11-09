const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants');

const startGame = () => {
  Console.print(MESSAGES.START);
};

module.exports = { startGame };
