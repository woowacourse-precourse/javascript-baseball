const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printGameEnd() {
    Console.print('게임 종료');
    Console.close();
  },

  printGameHint(hint) {
    let { ball: ball, strike: strike } = hint;
    this.checkGameHint(ball, strike);
  },

  checkGameHint(ball, strike) {
    let resultArr = [];
    if (ball === 0 && strike === 0) Console.print('낫싱');
    if (ball > 0) resultArr.push(`${ball}볼`);
    if (strike > 0) resultArr.push(`${strike}스트라이크`);

    Console.print(resultArr.join(' '));
  },
};

module.exports = OutputView;
