const GameBuilder = require("./Game.js");

const LENGTH = 3;

class App {
  constructor() {
    this.game = new GameBuilder().setTargetLength(LENGTH).build();
  }

  play() {
    this.game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
