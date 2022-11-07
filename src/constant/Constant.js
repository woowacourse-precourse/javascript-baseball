const MESSAGES = {
  INIT: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const REQUIREMENT = {
  RESTART: '1',
  TERMINATE: '2',
  LENGTH: 3,
  MIN: 1,
  MAX: 9,
};

const ERROR = {
  LENGTH: 'Input Length Error',
  NaN: 'Input Character Error',
  ZERO: 'Input Zero Error',
  DUPLICATE: 'Input Duplicate Error',
  NUMBER: 'Input Number Error',
};

const HINT = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
};

module.exports = { MESSAGES, REQUIREMENT, ERROR, HINT };
