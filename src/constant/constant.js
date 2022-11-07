const NUMBER_LENGTH = 3;

const COMMAND = {
  RESTART: 1,
  QUIT: 2,
};

const MESSAGES = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  ENTER_INPUT: '숫자를 입력해주세요 : ',
  WIN_GAME: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  ENTER_COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  ERROR: '잘못된 입력입니다. 프로그램을 종료합니다.',
};

const HINTS = {
  BALL: numberOfBall => `${numberOfBall}볼`,
  STRIKE: numberOfStrike => `${numberOfStrike}스트라이크`,
  NOTHING: '낫싱',
};

module.exports = {
  NUMBER_LENGTH,
  COMMAND,
  MESSAGES,
  HINTS,
};
