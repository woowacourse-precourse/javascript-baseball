const { printConsole } = require('../utils/missionUtils');

class BaseballView {
  renderPrint(message) {
    printConsole(message);
  }

  renderResultGame(result) {
    if (!result) {
      this.renderPrint('낫싱');
      return;
    }
    this.renderPrint(result);
  }
}

module.exports = BaseballView;
