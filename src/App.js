const Messages = require('./messages');
const {print} = require('./input');

class App {
  // eslint-disable-next-line class-methods-use-this
  play() {
    while (true) {
      print(Messages.GAME_START);
      // TODO: 숫자 야구 게임 구현

      break;
    }
  }
}

module.exports = App;
