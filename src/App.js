const { MESSAGE } = require('./constants');
const Game = require('./game');

const game = new Game();

class App {
  init() {
    game.start(MESSAGE.START);
    game.generateRandomNumber(1, 9, 3);
  }

  play() {}
}

const app = new App();
app.init();

module.exports = App;
