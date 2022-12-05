const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");

const InputView = {
  readNumber(fn) {
    MissionUtils.Console.readLine(MESSAGE.input.number, fn);
  },

  readCommand(fn) {
    MissionUtils.Console.readLine(MESSAGE.input.command, fn);
  },
};

module.exports = InputView;
