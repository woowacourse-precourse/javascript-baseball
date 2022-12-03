const Referee = require("../model/Referee");
const Game = require("../model/Game");
const IngState = require("./State/IngState");
const RetryState = require("./State/RetryState");

class BaseballGame {
  #referee;
  #state;
  #states = {};
  constructor() {
    this.#states["ing"] = new IngState(this);
    this.#states["retry"] = new RetryState(this);
    this.#state = this.#state["ing"];
    this.#referee = new Referee(new Game());
  }
  tryMatch(command) {
    return this.#state.tryMatch(command);
  }
  retry(command) {
    return this.#state.retry(command);
  }

  get referee() {
    return this.#referee;
  }

  get ingState() {
    return this.#state["ing"];
  }

  get retryState() {
    return this.#state["retry"];
  }

  set state(state) {
    this.#state = state;
  }
}

module.exports = BaseballGame;
