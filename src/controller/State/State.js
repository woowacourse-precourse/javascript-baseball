//@ts-check
const BaseballGame = require("../BaseballGame");

/** @interface */
class State {
  /** @type {BaseballGame} */
  baseballGame;

  tryMatch(command) {}

  retry(command) {}
}

module.exports = State;
