const { KEEP_PLAY, EXIT } = require('./game numbers');

const ERROR_MESSAGE = Object.freeze({
  LENGTH_ERROR: '3개 숫자를 입력하세요.',
  TYPE_ERROR: '숫자만 입력해주세요.',
  DUP_ERROR: '중복 없이 3개 숫자를 입력해주세요',
  INVALID_NUM_ERROR: `숫자로 ${KEEP_PLAY} 혹은 ${EXIT}를 입력해주세요.`,
});

module.exports = ERROR_MESSAGE;
