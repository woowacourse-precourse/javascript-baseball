const Referee = require('./Referee');

class App {
  constructor() {
    this.referee = null;
  }

  play() {
    this.referee = new Referee();
    this.referee.gameInit();
  }
}

const app = new App();
app.play();

module.exports = App;
