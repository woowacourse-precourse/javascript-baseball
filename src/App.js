const Game = require('./Game');
const Io = require('./Io');
class App {
  constructor () {
    this.game = new Game();
  }

  play () {
    Io.output('숫자 야구 게임을 시작합니다.');
    this.Game.playCommand();
  }
}

module.exports = App;
