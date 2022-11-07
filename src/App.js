const BaseballGame = require('./components/baseballGame');
const baseballGame = new BaseballGame();

class App {
  play() {
    baseballGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
