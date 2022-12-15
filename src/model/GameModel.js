const IGameModel = require('./IGameModel');
const { ERROR_MESSAGE } = require('../constants');

class GameModel extends IGameModel {
  constructor() {
    super();
    if (this.constructor === GameModel) {
      throw new Error(ERROR_MESSAGE.abstract_class);
    }
  }
}

module.exports = GameModel;
