const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const InputView = {
  readCarName(callback) {
    Console.readLine(MSG.INPUT_AMOUNT, callback);
  },

  readTries(callback) {
    Console.readLine(MSG.INPUT_TRIES, callback);
  },
};

module.exports = InputView;
