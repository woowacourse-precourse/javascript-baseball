const { GAME_MESSAGE } = require('../utils/constant');
const { printConsole } = require('../utils/missionUtils');

class BaseballGameView {
  print(message) {
    printConsole(message);
  }

  printResultGame(strike, ball) {
    if (ball && !strike) {
      this.print(ball);
    } else if (!ball && strike) {
      this.print(strike);
    } else if (ball && strike) {
      this.print(`${ball} ${strike}`);
    } else if (!ball && !strike) {
      this.print(GAME_MESSAGE.NOTHING);
    }
  }
}

module.exports = BaseballGameView;
