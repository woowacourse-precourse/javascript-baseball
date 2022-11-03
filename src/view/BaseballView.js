const { triggerPrint } = require('../utils/missionUtils');

class BaseballView {
  renderPrint(message) {
    triggerPrint(message);
  }
}

module.exports = BaseballView;
