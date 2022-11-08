const RANDOMLIST = Object.freeze({
  STARTPOINT: 1,
  ENDPOINT: 9,
});

const BASEBALL = Object.freeze({
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  STRIKE_COUNT: 3,
});

const COMMAND = Object.freeze({
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  QUESTION: '숫자를 입력해주세요 : ',
  NEXT_QUESTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
  STRIKEOUT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  CLOSE: '게임 종료',
  RESTART: '1',
  EXIT: '2',
});

const EXCEPTION = Object.freeze({
  REGEX: /[1-9]/g,
  RESTART: '1',
  EXIT: '2',
  LENGTH: 3,
});

module.exports = {
  RANDOMLIST,
  BASEBALL,
  COMMAND,
  EXCEPTION,
};
