const { Console } = require('@woowacourse/mission-utils');

class GameStatusUI {
  #dispatcher;

  constructor() {
    this.#dispatcher = {};
  }

  update(newGameStatus) {
    if (newGameStatus === 'START') {
      Console.print('숫자 야구 게임을 시작합니다.');
    }
  }

  injection(newDispatcher) {
    this.#dispatcher = newDispatcher;
  }
}

module.exports = GameStatusUI;
