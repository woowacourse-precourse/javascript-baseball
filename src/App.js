import Game from './controller/Game.js';

class App {
  play() {
    this.game = new Game();
    this.game.playGame();
  }
}

export default App;
