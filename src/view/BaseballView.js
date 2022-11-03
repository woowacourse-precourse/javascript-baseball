const { printConsole } = require('../utils/missionUtils');

class BaseballView {
  renderPrint(message) {
    printConsole(message);
  }
}

module.exports = BaseballView;
