const { Console } = require('@woowacourse/mission-utils');

const OutputView = {

    gameStart(message) {
      return Console.print(message);
    }
}

module.exports = OutputView;