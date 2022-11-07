const Game = require('./Game');
const Io = require('./Io');
class App {
  constructor () {
    this.Game = new Game();
    this.Io = Io;
  }

  play () {
    this.Io.output('숫자 야구 게임을 시작합니다.');
    this.Game.playCommand();
  }
}

module.exports = App;
