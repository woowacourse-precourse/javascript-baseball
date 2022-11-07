const NUMBER_BASEBALL = require('./NumberBaseball');

class App {
  play() {
    this.numberBaseball = new NUMBER_BASEBALL();
    this.numberBaseball.gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
