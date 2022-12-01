const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constant');

const OutputView = {
  startView() {
    Console.print(MESSAGE.START);
  },

  resultCompare(ball, strike) {
    if (strike === 0) {
      Console.print(`낫싱`);
    } else if (ball === 0) {
      Console.print(`${strike} 스트라이크`);
    } else {
      Console.print(`${ball} 볼 ${strike} 스트라이크`);
    }
  },

  gameOverWithSuccess() {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  },
};

module.exports = OutputView;

