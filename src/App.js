const Game = require('./Game');

const game = new Game();

class App {
  play() {
    game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
