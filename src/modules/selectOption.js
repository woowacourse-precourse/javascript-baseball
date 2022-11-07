const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS, OPTIONS } = require("../constants");

selectOption = () => {
  MissionUtils.Console.readLine(MESSAGES.INPUT_OPTION, (num) => {
    isOptionError(num);
  });
};

isOptionError = (option) => {
  const RESTART = OPTIONS.RESTART;
  const END = OPTIONS.END;

  if (option !== RESTART && option !== END) {
    throw ERRORS.OPTION;
  }

  if (option === RESTART) {
    return playGame();
  }

  if (option === END) {
    MissionUtils.Console.print(MESSAGES.END);
  }
};

exports.selectOption = selectOption;
