const Io = require('./Io');
class App {
  constructor() {
    this.Io = Io;
  }

  play() {
    this.Io.output('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = App;
