const PHRASE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  ERROR: '서로 다른 세 자리 수를 입력해야 합니다.',
  CORRECT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const BASEBALL = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
};

const GAME = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  NUMBER_COUNT: 3,
  CORRECT_COUNT: 3,
  RESTART: '1',
  EXIT: '2',
};

module.exports = {
  PHRASE,
  BASEBALL,
  GAME,
};
