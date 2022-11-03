const { gameStart } = require('./gameStart');

class App {
  play() {
    gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
