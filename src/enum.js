//@ts-check
/** @enum {Symbol} */
const GAME_STATE = Object.freeze({
  START: Symbol('start game'),
  ING: Symbol('playing game'),
  END: Symbol('end game'),
});

module.exports = { GAME_STATE };
