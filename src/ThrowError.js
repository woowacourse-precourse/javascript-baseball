const MissionUtils = require("@woowacourse/mission-utils");
const { WRONG_INPUT_ERROR_MESSAGE } = require("./constants/Messeages");

const throwError = () => {
  MissionUtils.Console.close();
  throw new Error(WRONG_INPUT_ERROR_MESSAGE);
};

module.exports = throwError;
