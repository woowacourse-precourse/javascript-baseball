const GAME_NUMBER = Object.freeze({
  INIT: 0,
  STRIKE: 1,
  BALL: 2,
  CORRECT: 3,
  GUESS: 3,
});

const BOOLEAN = Object.freeze({
  TRUE: true,
  FALSE: false,
});

const PICK_NUMBER = Object.freeze({
  MIN: 1,
  MAX: 9,
  PICK: 3,
});

const REPLAY_NUMBER = Object.freeze({
  KEEP_PLAY: '1',
  EXIT: '2',
});

module.exports = { GAME_NUMBER, PICK_NUMBER, REPLAY_NUMBER, BOOLEAN };
