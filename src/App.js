const Referee = require('./Referee');

class App {
  play() {
    const referee = new Referee();
    referee.gameStart();
  }
}

module.exports = App;
