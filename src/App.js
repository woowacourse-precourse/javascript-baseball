const { Console } = require('@woowacourse/mission-utils');
const Game = require('./Game');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    const { game } = this;

    Console.print('숫자 야구 게임을 시작합니다.');
    game.start();
  }
}

module.exports = App;
