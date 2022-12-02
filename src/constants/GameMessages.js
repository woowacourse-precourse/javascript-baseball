const GAME_MESSAGES = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  GET_USER_NUMBER: '숫자를 입력해주세요 : ',
  THREE_STRIKE: '3스트라이크',
  INVALID_LENGTH: '3자리 숫자를 입력해주세요!',
  INVALID_FORM: '띄어쓰기 없이 입력해주세요!',
  NOT_A_NUMBER: '숫자만 입력해주세요!',
  DUPLICATED_NUM: '서로 다른 숫자를 입력해주세요!',
  REQUIRE_USER_INPUT: (num) => `서로다른 ${num}자리 숫자를 입력해주세요: `,
  ASK_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  FORMAT_ERROR_CHOICE: '입력값은 반드시 1 또는 2여야 합니다.',
  END: `3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_GAME: '게임을 다시 시작합니다',
  END_GAME: '게임 종료',
});

module.exports = GAME_MESSAGES;
