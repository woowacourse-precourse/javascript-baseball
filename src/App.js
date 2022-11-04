const NumericBaseballGame = require("./game");

class App {
  constructor() {
    this.numericBaseballGame = new NumericBaseballGame();
  }

  play() {
    this.numericBaseballGame.start();
  }
}

module.exports = App;

const app = new App();
app.play();
