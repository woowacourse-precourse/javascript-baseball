const Messages = require('./messages');
const {print, read} = require('./input');
const Opponent = require('./models/opponent');
const Gong = require('./models/gong');

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    while (true) {
      print(Messages.GAME_START);
      const opponent = new Opponent();

      const gong = Gong.parseGong(await read(Messages.INPUT_YOUR_GONG));

      // TODO: 숫자 야구 게임 구현

      break;
    }
  }
}

module.exports = App;
