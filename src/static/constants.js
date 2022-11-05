module.exports = {
  NUMBERS_RULES: {
    minOfRange: 1,
    maxOfRange: 9,
    digit: 3,
  },
  START_RULES: {
    start: '1',
    exit: '2',
  },
  MESSAGE: {
    startApp: '숫자 야구 게임을 시작합니다.',
    resultNoting: '낫싱',
    resultBall: '볼',
    resultStrike: '스트라이크',
    gameOver: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  },
  QUESTION: {
    inputNumber: '숫자를 입력해주세요 : ',
    restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  },
  EXCEPTION: {
    notNumbers: '입력값이 숫자가 아닌 값을 포함합니다.',
    invalidLength: '입력값이 길이 조건을 만족하지 않습니다.',
    includeZero: '입력값이 0을 포함합니다.',
    duplicated: '입력값이 중복된 문자를 포함합니다.',
  },
};
