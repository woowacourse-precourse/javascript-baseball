const { Console } = require('@woowacourse/mission-utils');
const Game = require('./Game');

const game = new Game();

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    game.start();
  }
}

module.exports = App;
