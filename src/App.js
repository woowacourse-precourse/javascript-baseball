const GameService = require('./GameService');

class App {
  play() {
    const gameService = new GameService();

    gameService.startGame();
  }
}

module.exports = App;
