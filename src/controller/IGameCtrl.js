import { ERROR_MESSAGE } from '../constants';

const IGameCtrl = class {
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
};

module.exports = IGameCtrl;
