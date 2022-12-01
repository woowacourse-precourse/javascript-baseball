const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const InputView = {
  readUserNumber(user) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (number) => {
      user.setNumber(number);
    });
  },
};

module.exports = InputView;

