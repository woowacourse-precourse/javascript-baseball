const GAME = Object.freeze({
  START_MENTION: `숫자 야구 게임을 시작합니다.`,
  START_GETNUMBER: `숫자를 입력해주세요 :`,

  GAME_NOTHING: `낫싱`,

  GAME_END_MENTION: `3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  END_RETRY_MENTION: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,

  END_MENTION: `수고하셨습니다.`,
});

const ERROR = Object.freeze({
  USER_INPUT_LENGTH: `숫자를 3개 입력해주세요.`,
  USER_INPUT_DUPLICATES: `숫자에 중복이 있습니다.`,
  USER_INPUT_RANGE: `숫자 1~9까지만 입력이 가능합니다.`,
  USER_INPUT_BLANK: `공백은 입력할 수 없습니다.`,
  USER_RETRY_INPUT_RANGE: `입력은 1또는 2만 가능합니다.`,
  USER_RETRY_INPUT_BLANK: `공백은 입력할 수 업습니다.`,
  USER_RETRY_INPUT_LENGTH: `입력 값이 2개 이상입니다.`,
});

module.exports = { GAME, ERROR };
