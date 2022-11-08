const Game = require('./game');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.game.start();
  }
}

const app = new App();
app.play();

module.exports = App;
