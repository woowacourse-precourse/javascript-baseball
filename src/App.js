const BaseballGame = require('./controllers/BaseballGame');

class App {
  constructor() {
    this.controller = new BaseballGame();
  }
  play() {
    this.controller.play();
  }
}

module.exports = App;
