const Game = require('./game');

const game = new Game();

class App {
  play() {
    game.init();
    game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
