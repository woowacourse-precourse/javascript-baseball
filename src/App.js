const Messages = require('./messages');
const {print, read} = require('./input');
const Game = require('./game');
const {parseEndSelect, EndSelect} = require('./constants');

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    print(Messages.GAME_START);

    while (true) {
      const game = new Game();
      await game.play();

      print(Messages.END_SELECT);
      const endSelect = parseEndSelect(await read());
      if (endSelect === EndSelect.SHUTDOWN) {
        break;
      }
    }
  }
}

module.exports = App;
