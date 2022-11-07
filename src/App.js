const Messages = require('./messages');
const {print} = require('./input');
const Opponent = require('./models/opponent');

class App {
  // eslint-disable-next-line class-methods-use-this
  play() {
    while (true) {
      print(Messages.GAME_START);
      const opponent = new Opponent();

      // TODO: 숫자 야구 게임 구현

      break;
    }
  }
}

module.exports = App;
