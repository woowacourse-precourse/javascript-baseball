const GameControl = require('./Controller');

class App {
  play() {
    let game = new GameControl();
    game.startGame();
  }
}

module.exports = App;


