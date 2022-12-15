const { ERROR_MESSAGE } = require('../constants');

class IGameCtrl {
  start() {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  gameProcess() {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  end() {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  askToReplayGame() {
    throw Error(ERROR_MESSAGE.interface_class);
  }
}

module.exports = IGameCtrl;
