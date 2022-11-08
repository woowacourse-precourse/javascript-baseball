const BaseballGame = require('./game/BaseballGame');

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.init();
  }
}

const app = new App();
app.play();

module.exports = App;
