const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printGameEnd() {
    Console.print('게임 종료');
    Console.close();
  },
};

module.exports = OutputView;
