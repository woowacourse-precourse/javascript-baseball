const MESSAGES = Object.freeze({
    START: "game started",
    THREE_STRIKE: "3볼 3스트라이크",
    INVALID_LENGTH: "3자리 숫자를 입력해주세요!",
    NOT_A_NUMBER: "숫자만 입력해주세요!",
    REQUIRE_USER_INPUT: (num) => `${num}자리 숫자를 입력해주세요: `,
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
  
  module.exports = { MESSAGES, UNITS, NUMBERS };