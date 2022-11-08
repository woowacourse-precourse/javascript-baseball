const Computer = require("./Computer");
const BaseBallGame = require("./BaseBallGame");
const RandomNumber = require("./RandomNumber");

class App {
  play() {
    const baseBallGame = new BaseBallGame();
    baseBallGame.start();
  }
}

module.exports = App;
