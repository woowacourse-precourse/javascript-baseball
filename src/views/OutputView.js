const { MESSAGE_SYSTEM, MESSAGE_RESULT } = require('../constants/messages');
const console = require('../utils/console');

const OutputView = {
  printStartMessage() {
    console.print(MESSAGE_SYSTEM.START_POINT);
  },

  printError(error) {
    console.print(error);
  },

  printResult(result) {
    if (result.ball && result.strike) {
      console.print(
        `${result.ball}${MESSAGE_RESULT.BALL} ${result.strike}${MESSAGE_RESULT.STRIKE}`
      );
      return;
    }

    if (result.ball && !result.strike) {
      console.print(`${result.ball}${MESSAGE_RESULT.BALL}`);
      return;
    }

    if (!result.ball && result.strike) {
      console.print(`${result.strike}${MESSAGE_RESULT.STRIKE}`);
      return;
    }

    console.print(`${MESSAGE_RESULT.NOTHING}`);
  },

  printStopGame() {
    console.print(MESSAGE_RESULT.THREE_STRIKE);
  },

  printEndGame() {
    console.print(MESSAGE_SYSTEM.END_POINT);
  },
};

module.exports = OutputView;
