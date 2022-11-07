const BaseBallGame = require('./BaseBallGame');
const { MESSAGE } = require('./utils/Constant');

class App {
  baseBallGame = new BaseBallGame();
  play() {
    this.baseBallGame.create(MESSAGE.start);
  }
}

module.exports = App;
