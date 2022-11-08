const GAME_MESSAGE = {
  GMAE_START: "숫자 야구 게임을 시작합니다.",
  INPUT_TEXT: "숫자를 입력해주세요 : ",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RETRY_TEXT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  MAX_LENGTH: 3,
  NO_MESSAGE: "",
  ANSWER: "3스트라이크",
  STRIKE: "스트라이크",
  BALL: "볼",
};

const ERROR_MESSAGE = {
  INPUT_EXIST_ERROR: "값을 입력해주세요.",
  INPUT_LENGTH_ERROR: "3자리 숫자를 입력해주세요.",
  INPUT_TYPE_ERROR: "숫자를 입력해주세요.",
  INPUT_ISPOSITIVE_NUM_ERROR: "0보다 큰 숫자를 입력해주세요.",
  INPUT_REPEAT_ERROR: "서로 다른 숫자를 입력해주세요.",
  RETRY_INPUT_ERROR: "1혹은 2를 입력해주세요.",
};

const RETRY_MESSAGE = {
  RETRY: "1",
  FINISH: "2",
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  RETRY_MESSAGE,
};
