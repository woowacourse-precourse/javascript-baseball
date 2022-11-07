const MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  READ_NUMBER: '숫자를 입력해 주세요 : ',
  READ_STATE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  INPUT_ERROR: '잘못된 값을 입력하셨습니다.',
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
});

const STATE = Object.freeze({
  DEFAULT: -1,
  END: 0,
  RESTART: 1,
  EXIT: 2,
});

const NUMBER = Object.freeze({
  COUNT: 3,
  MIN: 1,
  MAX: 9,
});

const REG_EXP = Object.freeze({
  NUMBER: /^[1-9]{3}$/,
  STATE: /^[12]{1}$/,
});

module.exports = {
  MESSAGE,
  STATE,
  NUMBER,
  REG_EXP,
};
