/** @enum */
const GAME_STATE = Object.freeze({
  ING: Symbol('playing game'),
  WIN: Symbol('win game'),
  END: Symbol('end game'),
});


module.exports = { GAME_STATE };