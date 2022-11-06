const BaseballGame = require('./BaseballGame');

class App {
  play() {
    const baseballGame = new BaseballGame();
    baseballGame.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
