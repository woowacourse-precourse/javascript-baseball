const GameController = require('./controller/GameController');
const { GAME_NUMBER_LENGTH } = require('./constants/GameConfig');

class App {
  constructor() {
    this.game = new GameController();
  }

  play() {
    this.game.onInputNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
