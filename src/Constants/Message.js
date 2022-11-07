const ERROR_MESSAGE = {
  NOT_NUMBER: "숫자만 입력해주세요",
  NOT_THREE_LENGTH: "3개의 숫자만 입력해주세요",
  NOT_DUPLICATED: "중복되지 않는 숫자로 입력해주세요",
  NOT_ZERO: "1부터 9까지만 입력해주세요.",
  ONLY_ONE_TWO: "1또는 2만 입력해주세요.",
};

const GAME_STATE_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  ENTER_NUMBER: "숫자를 입력해주세요 : ",
  WIN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: "게임 종료",
};

const GAME_RESULT_MESSAGE = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

module.exports = { ERROR_MESSAGE, GAME_STATE_MESSAGE, GAME_RESULT_MESSAGE };
