const { Baseball } = require('./components/Baseball');

class App {
  constructor() {
    this.basball = new Baseball();
  }

  play() {
    this.basball.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
