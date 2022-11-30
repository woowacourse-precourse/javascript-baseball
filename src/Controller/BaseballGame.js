const { startView } = require('../View/OutputView');

class BaseballGame {
  #game;

  #user;

  constructor(game, user) {
    this.#game = game;
    this.#user = user;
  }

  run() {
    startView();
    this.#user.getNumber();
  }
}

module.exports = BaseballGame;

