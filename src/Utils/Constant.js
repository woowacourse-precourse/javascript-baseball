const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '\n숫자를 입력해주세요 : ',
  RESTART_OR_NOT: '\n다시 시작하려면 1, 게임을 종료하려면 2를 입력하세요\n',
  SUCCESS: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  NOTHING: '낫싱',
  NO_BALL: (strike) => `${strike}스트라이크`,
  RESULT: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
};

const ERROR_MESSAGE = {
  RESTART_OR_NOT: '[ERROR] 1 또는 2를 입력하세요',
  USER_NUMBER_COUNT: '[ERROR] 세개의 숫자를 입력 해주세요.',
  USER_NUMBER_TYPE: '[ERROR] 세개의 숫자를 입력 해주세요.',
};

const GAME = {
  LENGTH: 3,
  RESTART: '1',
  END: '2',
};

module.exports = { MESSAGE, ERROR_MESSAGE, GAME };

