const GAME_MESSAGE = {
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  ENTER_NUMBER: '숫자를 입력해주세요 : ',
  RESTART_MESSAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  END_MESSAGE: '게임 종료',
  ANSWER: '3스트라이크',
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  GAME_NUMBER_LENGTH: 3,
  RETRY: '1',
};
Object.freeze(GAME_MESSAGE);

module.exports = GAME_MESSAGE;
