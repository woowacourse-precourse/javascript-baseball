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
  ERROR_RESTART:
    '1 또는 2를 입력해주세요. 유효하지 않은 값이 입력되어 게임이 종료됩니다.',
  ERROR_Length: `${ANSWER.LENGTH}자리 수만 입력 해주세요.`,
  ERROR_Number: '1부터 9까지의 숫자만 입력 해주세요.',
  ERROR_Duplicate: '중복된 숫자는 입력할 수 없습니다.',
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
