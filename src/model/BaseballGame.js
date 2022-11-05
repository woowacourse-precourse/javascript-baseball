/** @enum */
const GameState = Object.freeze({
  ING: Symbol('playing game'),
  WIN: Symbol('win game'),
  END: Symbol('end game'),
});


module.exports = { GameState };