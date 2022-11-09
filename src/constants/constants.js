const ANSWER = {
  LENGTH: 3,
  MIN: 1,
  MAX: 9,
};

const OPTION = {
  RESTART: '1',
  END: '2',
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  END: '개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  ERROR: '유효하지 않은 값이 입력되어 게임이 종료됩니다.',
};

const RESULT = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
};

module.exports = {
  ANSWER,
  OPTION,
  MESSAGE,
  RESULT,
};
