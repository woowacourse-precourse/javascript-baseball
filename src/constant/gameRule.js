const GAME_PROGRESS_TEXT = {
  START_TEXT: '숫자 야구 게임을 시작합니다.',
  REQUEST_INPUT: '숫자를 입력해주세요 : ',
  RESTART_QUESTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
};

const GAME_RESULT_TEXT = {
  THREE_STRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  NOTHING: '낫싱',
  STRIKE: '스트라이크',
  BALL: '볼',
};

const THREE_STRIKE_COUNT = 3;

const RESTART_USER_INPUT = {
  RESTART_INPUT: '1',
  STOP_INPUT: '2',
};

module.exports = {
  GAME_PROGRESS_TEXT,
  GAME_RESULT_TEXT,
  THREE_STRIKE_COUNT,
  RESTART_USER_INPUT,
};
