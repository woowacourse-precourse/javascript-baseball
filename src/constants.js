const MESSAGES = Object.freeze({
    START: "game started",
    THREE_STRIKE: "3볼 3스트라이크",
    INVALID_LENGTH: "3자리 숫자를 입력해주세요!",
    NOT_A_NUMBER: "숫자만 입력해주세요!",
    REQUIRE_USER_INPUT: (num) => `${num}자리 숫자를 입력해주세요: `,
    ASK_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    FORMAT_ERROR_CHOICE: '입력값은 반드시 1 또는 2여야 합니다.',
    END: (num) => `${num}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  });
  
  const UNITS = Object.freeze({
    BALL: "볼",
    STRIKE: "스트라이크",
    NOTHING: "낫싱",
  });
  
  const NUMBERS = Object.freeze({
    NOTHING: 0,
    BALL_MAX: 2,
    GAME_MAX: 3,
  });

  const CHOICE = Object.freeze({
    PLAY_AGAIN: '1',
    EXIT: '2',
  });
  
  const REGEX = Object.freeze({
    GUESS: /^[1-9]{3}$/,
    CHOICE: /^[12]$/,
    SPACE: / /gi,
  });

  module.exports = { MESSAGES, UNITS, NUMBERS, CHOICE, REGEX };