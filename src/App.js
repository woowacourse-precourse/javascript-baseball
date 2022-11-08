const Game = require('./controller/Game');

class App {
  play() {
    this.game = new Game();
    this.game.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
