const Messages = require('./messages');

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
  const value = Number(text);
  if (Number.isNaN(value)) throw new Error(Messages.END_SELECT_INVALID_FORMAT);

  const constant = Object.values(EndSelect).find((_constant) => _constant === value);
  if (!constant) throw new Error(Messages.END_SELECT_INVALID_FORMAT);

  return constant;
};

module.exports = {
  EndSelect,
  parseEndSelect,
};
