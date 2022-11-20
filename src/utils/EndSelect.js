const Messages = require('../Messages');

/**
 * 게임 종료 후 계속할 것인지에 대한 선택
 */
const EndSelect = Object.freeze({
  RETRY: 1,
  SHUTDOWN: 2,
});

/**
 * 문자열로 부터 {@link EndSelect} 를 파싱합니다.
 * @param {string} text
 */
const parseEndSelect = (text) => {
  if (text === '1') return EndSelect.RETRY;
  if (text === '2') return EndSelect.SHUTDOWN;

  throw new Error(Messages.END_SELECT_INVALID_FORMAT);
};

module.exports = {
  EndSelect,
  parseEndSelect,
};
