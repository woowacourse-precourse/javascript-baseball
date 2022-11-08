const NUMBERS_RULES = Object.freeze({
  minOfRange: 1,
  maxOfRange: 9,
  digit: 3,
});

const START_RULES = Object.freeze({
  start: '1',
  exit: '2',
});

const MESSAGE = Object.freeze({
  startApp: '숫자 야구 게임을 시작합니다.',
  resultNoting: '낫싱',
  resultBall: '볼',
  resultStrike: '스트라이크',
  gameOver: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

const QUESTION = Object.freeze({
  inputNumber: '숫자를 입력해주세요 : ',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const EXCEPTION = Object.freeze({
  notNumbers: '입력값이 숫자가 아닌 값을 포함합니다.',
  invalidLength: '입력값이 길이 조건을 만족하지 않습니다.',
  includeZero: '입력값이 0을 포함합니다.',
  duplicated: '입력값이 중복된 문자를 포함합니다.',
  invalidInput: '유효하지 않은 입력값입니다.',
});

module.exports = {
  NUMBERS_RULES,
  START_RULES,
  MESSAGE,
  QUESTION,
  EXCEPTION,
};
