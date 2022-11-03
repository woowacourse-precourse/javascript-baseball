const GAME_RULE = {
  RESTART_NUMBER: '1',
  FINISH_NUMBER: '2',
  NUMBERS_LENGTH: 3,
  STRIKE: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
};

const GAME_MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBERS: '숫자를 입력해주세요 : ',
  SUCCESS: `${GAME_RULE.STRIKE}스트라이크\n${GAME_RULE.STRIKE}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  INPUT_NUMBER: `게임을 새로 시작하려면 ${GAME_RULE.RESTART_NUMBER}, 종료하려면 ${GAME_RULE.FINISH_NUMBER}를 입력하세요.\n`,
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
};

const GAME_ERROR_MESSAGE = {
  NOT_VALID_VALUE: '숫자가 아닙니다.',
  NOT_VALID_LENGTH: `길이가 ${GAME_RULE.NUMBERS_LENGTH}이 아닙니다.`,
  NOT_VALID_NUMBER: `${GAME_RULE.RESTART_NUMBER} 또는 ${GAME_RULE.FINISH_NUMBER}의 값이 아닙니다.`,
  INCLUDE_ZERO: '0이 포함되어 있습니다.',
  DUPLICATE_NUMBER: '중복된 숫자가 존재합니다.',
};

exports.GAME_RULE = GAME_RULE;
exports.GAME_MESSAGE = GAME_MESSAGE;
exports.GAME_ERROR_MESSAGE = GAME_ERROR_MESSAGE;
