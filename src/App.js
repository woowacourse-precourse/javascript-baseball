const { MESSAGE } = require('./constants');
const Game = require('./game');

const game = new Game();

class App {
  play() {
    this.init();
    game.getNumberFromUser(MESSAGE.ENTER_NUMBER);
  }

  init() {
    game.start(MESSAGE.START);
    const randomNumber = game.generateRandomNumber(1, 9, 3);
    // console.log(randomNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
