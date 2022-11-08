const MainGame = require('./MainGame');

class App {
  play() {
    const mainGame = new MainGame();
    mainGame.play();
  }
}

module.exports = App;
