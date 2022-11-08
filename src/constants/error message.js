const { REPLAY_NUMBER, GAME_NUMBER } = require('./game numbers');

const ERROR_MESSAGE = Object.freeze({
  LENGTH_ERROR: `${GAME_NUMBER.CORRECT}개 숫자를 입력하세요.`,
  TYPE_ERROR: '숫자만 입력해주세요.',
  DUP_ERROR: `중복 없이 ${GAME_NUMBER.CORRECT}개 숫자를 입력해주세요,`,
  INPUT_ERROR: '게임 종료',
  INVALID_NUM_ERROR: `숫자로 ${REPLAY_NUMBER.KEEP_PLAY} 혹은 ${REPLAY_NUMBER.EXIT}를 입력해주세요.`,
});

module.exports = { ERROR_MESSAGE };
