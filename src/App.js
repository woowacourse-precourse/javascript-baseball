const BaseBallGame = require('./BaseBallGame'); 

class App {
  play() {
    const baseBallGame = new BaseBallGame();
    baseBallGame.start();
  }
}

module.exports = App;
