const Messages = require('./messages');
const {print} = require('./input');
const Game = require('./game');

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    print(Messages.GAME_START);

    while (true) {
      const game = new Game();
      await game.play();
    }
  }
}

module.exports = App;
