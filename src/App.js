const Referee = require('./Referee');

class App {
  constructor() {
    this.referee = new Referee();
  }

  play() {
    this.referee.gameStart();
  }
}

module.exports = App;
