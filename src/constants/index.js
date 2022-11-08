const GAME_RULE = {
  NUMBER_RANGE_START: 1,
  NUMBER_RANGE_END: 9,
  LENGTH: 3,
  RESTART: "1",
  END: "2",
};

const GAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  CORRECT: `${GAME_RULE.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART_OR_END: `게임을 새로 시작하려면 ${GAME_RULE.RESTART}, 종료하려면 ${GAME_RULE.END}를 입력하세요.\n`,
};

const ERROR_MESSAGE = {
  INVALID_CHARACTER: `${GAME_RULE.NUMBER_RANGE_START}~${GAME_RULE.NUMBER_RANGE_END} 사이의 숫자를 입력해주세요.`,
  DUPLICATE: "중복된 값이 포함되어 있습니다.",
  INVALID_LENGTH: `${GAME_RULE.LENGTH}자리의 숫자를 입력해주세요.`,
  INVALID_INPUT: "유효하지 않은 값을 입력하셨습니다. 게임 종료",
};

module.exports = {
  GAME_RULE,
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
