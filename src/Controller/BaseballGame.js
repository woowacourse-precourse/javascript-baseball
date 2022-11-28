class BaseballGame {
  #game;

  #user;

  constructor(game, user) {
    this.#game = game;
    this.#user = user;
  }
}

module.exports = BaseballGame;
