const MESSAGES = {
  APP_START: "숫자 야구 게임을 시작합니다.",
  GUESS_QUESTION: "숫자를 입력해주세요 : ",
  GAME_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REPLAY_QUESTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

const ERRORS = {
  LENGTH_IS_NOT_THREE: "3자리 숫자만 입력이 가능합니다.",
  IS_NOT_NUMBER: "숫자가 아닌 문자는 입력이 불가능합니다.",
  HAS_ZERO: "0이 포함된 숫자는 입력이 불가능합니다.",
  HAS_SAME_NUMBER: "중복되는 숫자는 입력이 불가능합니다.",
  ONLY_ONE_OR_TWO: "1 혹은 2만 입력 가능합니다.",
};

module.exports = { MESSAGES, ERRORS };
