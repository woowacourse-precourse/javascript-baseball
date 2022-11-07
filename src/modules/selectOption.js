const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS, OPTIONS } = require("../constants");

selectOption = () => {
  Console.readLine(MESSAGES.INPUT_OPTION, (num) => {
    isOptionError(num);
  });
};

isOptionError = (option) => {
  const RESTART = OPTIONS.RESTART;
  const END = OPTIONS.END;
  if (option === RESTART) {
    return playGame();
  }
  if (option === END) {
    Console.print(MESSAGES.END);
  }
  if (option !== RESTART && option !== END) {
    throw new Error(ERRORS.OPTION);
  }
};

module.exports.selectOption = selectOption;
