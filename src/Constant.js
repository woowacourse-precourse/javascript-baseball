const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  ASK_GUESS: '숫자를 입력해 주세요 : ',
  GAME_CLEAR: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  ASK_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  FORMAT_ERROR_GUESS: '입력값은 반드시 1~9로만 구성된, 자릿수의 숫자가 모두 다른 세 자리의 양의 정수여야 합니다.',
  FORMAT_ERROR_CHOICE: '입력값은 반드시 1 또는 2여야 합니다.',
  THREE_STRIKE: '3스트라이크',
};

const CONSTANT = {
  DIGIT_LIMIT: 3,
};

const REGEX = {
  GUESS: /^[1-9]{3}$/,
  CHOICE: /^[12]$/,
};

const CHOICE = {
  PLAY_AGAIN: '1',
  EXIT: '2',
};

module.exports = {
  MESSAGE,
  CONSTANT,
  REGEX,
  CHOICE,
};
