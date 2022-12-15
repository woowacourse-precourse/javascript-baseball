const MESSAGE_SYSTEM = Object.freeze({
  START_POINT: '숫자 야구 게임을 시작합니다.',
  END_POINT: '숫자 야구 게임을 종료합니다.',
});

const MESSAGE_QUESTION = Object.freeze({
  SET_ANSWERS: '숫자를 입력해주세요 : ',
  SET_GAME_STATE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const MESSAGE_ERROR = Object.freeze({
  INVALID_VALUE: '잘못된 값의 입력입니다.',
});

const MESSAGE_RESULT = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  THREE_STRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

module.exports = {
  MESSAGE_SYSTEM,
  MESSAGE_QUESTION,
  MESSAGE_ERROR,
  MESSAGE_RESULT,
};
