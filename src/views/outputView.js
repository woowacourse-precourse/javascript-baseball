const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  print(something) {
    Console.print(something);
  },
  close() {
    Console.close();
  },
};

module.exports = OutputView;
