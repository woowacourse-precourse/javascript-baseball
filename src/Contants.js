const ErrorMessage = {
  NOT_VALID_RANGE_NUMBER: "1부터 9까지의 숫자만 가능합니다.",
  NOT_VALID_NUMBER_LENGTH: "숫자는 3개만 입력할 수 있습니다.",
  NOT_VALID_OVERLAY_NUMBER: "중복된 값을 입력하였습니다.",
  NOT_VALID_SETTING_NUMBER: "1 또는 2를 입력하셔야 합니다.",
  NOT_VALID_EMPTY_INPUT: "값을 입력하셔야 합니다."
};

const GameMessage = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  GAME_WIN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_AGAIN_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  PLEASE_INPUT_NUMBER: "숫자를 입력해주세요 : "
};

module.exports = {
  ErrorMessage,
  GameMessage
};
