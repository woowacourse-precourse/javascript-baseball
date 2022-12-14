import { ERROR_MESSAGE } from '../constants';

const IGameView = class {
  errorBoundary(callerFunction, callback) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  errorHandler(error) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  input(message, callback) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  output(message) {
    throw Error(ERROR_MESSAGE.interface_class);
  }

  close() {
    throw Error(ERROR_MESSAGE.interface_class);
  }
};

module.exports = IGameView;
