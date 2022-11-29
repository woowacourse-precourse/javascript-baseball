const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Constants');
const Validate = require('../utils/Validate');

const InputView = {
  readUserNumber() {
    Console.readLine(MESSAGE.READ_USER_NUMBER, (userNumber) => {
      Validate.checkUserNumber(userNumber);
    });
  },
};

module.exports = InputView;
