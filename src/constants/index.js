const MESSAGE = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  STRIKE_OUT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RETRY_OR_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const COUNT_MESSAGE = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  THREE_STRIKE: '3스트라이크',
};

const ERROR_MESSAGE = {
  LENGTH_ERROR: '입력한 값이 3자리가 아니에요!',
  DIFFERENT_DIGITS_ERROR: '서로 다른 수가 아니에요!',
  NUM_IN_RANGE_ERROR: '각 자리 수 중 1부터 9로 이루어지지 않은 수가 있어요!',
  NOT_ONE_OR_TWO_ERROR: '1또는 2를 입력해주세요!',
};

const GAME_PROGRESS = {
  RETRY: '1',
  END: '2',
};

const NUMBER = {
  NUMBER_RANGE_START: 1,
  NUMBER_RANGE_END: 9,
  NUMBER_LENGTH: 3,
};

const constants = Object.freeze({ MESSAGE, COUNT_MESSAGE, ERROR_MESSAGE, GAME_PROGRESS, NUMBER });

module.exports = constants;
