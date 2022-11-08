const Baseball = require("./Baseball");

class App {
  constructor() {
    this.baseball = new Baseball();
  }

  play() {
    this.baseball.playGame();
  }
}

module.exports = App;
