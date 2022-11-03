const { printConsole } = require('../utils/missionUtils');

class BaseballGameView {
  print(message) {
    printConsole(message);
  }

  printResultGame(result) {
    if (!result) {
      this.print('낫싱');
      return;
    }
    this.print(result);
  }
}

module.exports = BaseballGameView;
