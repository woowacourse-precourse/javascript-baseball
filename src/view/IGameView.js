const { ERROR_MESSAGE } = require('../constants');

class IGameView {
  input(message, callback) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  output(message) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  close() {
    throw Error(ERROR_MESSAGE.interface_class);
  }
}

module.exports = IGameView;
