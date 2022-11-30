const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Constants');
const BaseballGameController = require('../BaseballGameController');
const Validate = require('../utils/Validate');

const InputView = {
  readUserNumber() {
    Console.readLine(MESSAGE.READ_USER_NUMBER, (userNumber) => {
      const USER_NUMBER_ARRAY = Validate.checkUserNumber(userNumber);
      if (BaseballGameController.checkResult(USER_NUMBER_ARRAY)) {
        BaseballGameController.threeStrike();
        return this.readCommand();
      }
      return this.readUserNumber();
    });
  },

  readCommand() {
    Console.readLine(MESSAGE.COMMAND, (command) => {
      const COMMAND = Number(command);
      Validate.checkCommand(COMMAND);
      if (BaseballGameController.checkCommandResult(COMMAND)) {
        BaseballGameController.start();
        return this.readUserNumber();
      }
      return BaseballGameController.end();
    });
  },
};

module.exports = InputView;
