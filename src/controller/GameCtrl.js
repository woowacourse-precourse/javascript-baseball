const IGameCtrl = require('./IGameCtrl');
const { ERROR_MESSAGE } = require('../constants');

const GameCtrl = class extends IGameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
    if (this.constructor === GameCtrl) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }

  start() {}

  gameProcess() {}

  end() {}
};

module.exports = GameCtrl;
