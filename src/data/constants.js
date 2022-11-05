const ERROR_MESSAGE = {
  NOT_THREE_LENGTH: '3글자인 값을 입력해주세요!',
  NOT_NUMBER_RANGE: '1부터 9 사이의 값을 입력해주세요!',
  IS_DUPLICATED: '중복되지 않은 값을 입력하세요!',

  IS_INVALID_RESTART_SUBMIT: '1과 2중에서 입력해주세요!',
};

const GAME_MESSAGE = {  
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  CLEAR: `3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
  GAMEOVER: `게임 종료`,
}

const RESULT_COUNT = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
};

const CLEAR_CONDITION = 3;

exports.ERROR_MESSAGE = ERROR_MESSAGE;
exports.GAME_MESSAGE = GAME_MESSAGE;
exports.RESULT_COUNT = RESULT_COUNT;
exports.CLEAR_CONDITION = CLEAR_CONDITION;