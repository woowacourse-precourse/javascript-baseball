const MESSAGES = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const OUTPUTS = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
};

const ERRORS = {
  UNVALID_INPUT_LENGTH:
    '3자리의 수를 입력해주세요. 입력이 올바르지 않아 게임을 종료합니다.',
  UNVALID_INPUT_VALUE:
    '중복되지 않는 3자리의 수를 입력해주세요. 입력이 올바르지 않아 게임을 종료합니다.',
  UNVALID_INPUT_VALUE_RESTART:
    '1과 2중에서 하나를 입력해주세요. 입력이 올바르지 않아 게임을 종료합니다.',
};

const RESTART_OPTIONS = {
  RESTART: 1,
  QUIT: 2,
};

exports.MESSAGES = MESSAGES;
exports.OUTPUTS = OUTPUTS;
exports.ERRORS = ERRORS;
exports.RESTART_OPTIONS = RESTART_OPTIONS;
