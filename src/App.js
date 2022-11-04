const BaseballGame = require('./baseballGame');
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
