const CONSTANT = {
  MESSAGE: {
    START: '숫자 야구 게임을 시작합니다.',
    GUESS: '숫자를 입력해주세요 : ',
    WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    CONTINUE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    END: '게임을 종료합니다.',
  },

  RESULT: {
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
  },

  ERROR: {
    INVALID_OPTION: '옵션에 없는 값입니다.',
    INVALID_LENGTH: '세 개의 숫자만 입력해주세요.',
    INVALID_TYPE: '숫자만 입력해주세요.',
    INVALID_RANGE: '0은 입력할 수 없는 숫자입니다.',
    DUPLICATED_NUMBER: '중복된 숫자는 사용할 수 없습니다.',
  },

  NUMBER: {
    WIN: 3,
    ARRAY_LENGTH: 3,
    MIN_RANGE: 1,
    MAX_RANGE: 9,
  },
};

module.exports = CONSTANT;
