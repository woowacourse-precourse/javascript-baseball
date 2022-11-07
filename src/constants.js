const MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  ENTER_NUMBER: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n',
});

const SCORE = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
});

const RANDOM_NUMBER = Object.freeze({
  MIN: 1,
  MAX: 9,
  LENGTH: 3,
  RANGE: /^[1-9]*$/,
});

const GAME = Object.freeze({
  START: 1,
  END: 2,
});

const ERROR = Object.freeze({
  ENTER_THREE_NUMBER: '1부터 9까지 서로 다른 숫자 3개를 입력해주세요',
  PRESS_ONE_OR_TWO: '1 또는 2를 입력해주세요',
});

module.exports = {
  MESSAGE,
  SCORE,
  RANDOM_NUMBER,
  GAME,
  ERROR,
};
