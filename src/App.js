const { startGame } = require('./modules/startGame');
const { playBaseballGame } = require('./modules/playBaseballGame');

class App {
  play() {
    startGame();
    playBaseballGame();
  }
}
const app = new App();
app.play();
module.exports = App;
