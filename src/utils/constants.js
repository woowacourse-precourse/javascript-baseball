const NUMBER = Object.freeze({
  RANGE_START: 1,
  RANGE_END: 9,
  DIGITS: 3,
});

const ACTION_TYPE = Object.freeze({
  GAME_INITIALIZE: 'GAME_INITIALIZE',
  GAME_START: 'GAME_START',
  NEW_GUESS: 'NEW_GUESS',
  GAME_RESTART: 'GAME_RESTART',
  GAME_OVER: 'GAME_OVER',
});

const GAME_STATUS = Object.freeze({
  INITIALIZED: 'INITIALIZED',
  STARTED: 'STARTED',
  RESTARTED: '1',
  FINISHED: '2',
});

const PRINT = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  GAME_START: '숫자 야구 게임을 시작합니다.',
  NEW_GUESS: '숫자를 입력해주세요 : ',
  GAME_OVER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

module.exports = {
  ACTION_TYPE,
  NUMBER,
  GAME_STATUS,
  PRINT,
};
