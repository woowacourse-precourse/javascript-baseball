const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/Constants');

const InputView = {
  readUserNumber() {
    Console.readLine(MESSAGE.READ_USER_NUMBER, (userNumber) => {});
  },
};

module.exports = InputView;
