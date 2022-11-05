const { Console } = require('@woowacourse/mission-utils');

class GameStatusUI {
  constructor() {
    this.update = (newGameStatus) => {
      if (newGameStatus === 'START') {
        Console.print('숫자 야구 게임을 시작합니다.');
      }
    };
  }
}

module.exports = GameStatusUI;
