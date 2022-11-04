const BaseballGame = require('./baseballGame');
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
