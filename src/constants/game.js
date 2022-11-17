const SETTING = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  NUMBER_COUNT: 3,
});

const HINT = Object.freeze({
  MIN_COUNT: 0,
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
});

const RESULT = Object.freeze({
  END_POINT: `${SETTING.NUMBER_COUNT}${HINT.STRIKE}`,
});

const END_INPUT = Object.freeze({
  PLAY_AGAIN: '1',
  CLOSE_APP: '2',
});

module.exports = {
  SETTING,
  HINT,
  RESULT,
  END_INPUT,
};
