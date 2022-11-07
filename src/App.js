const { Baseball } = require('./components/Baseball');

class App {
  constructor() {
    this.baseballGame = new Baseball();
  }

  play() {
    this.baseballGame.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
