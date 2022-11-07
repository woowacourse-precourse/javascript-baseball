import Game from './controller/Game.js';

class App {
  play() {
    this.game = new Game();
    this.game.start();
  }
}

const app = new App();
app.play();

export default App;
