const GAME_CONFIG = {
  START_NUMBER: 1,
  END_NUMBER: 9,
  COUNT: 3,
};

const ERROR_MESSAGE = {
  INPUT: "입력값은 중복되지 않은 숫자 3자리여야 합니다. (1~9)",
  INPUT_ZERO: "입력값은 숫자 1~9만 사용 가능합니다.",
};

const INGAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ASK: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const RESPONSE = {
  RESTART: "1",
  FINISH: "2",
};

module.exports = {
  GAME_CONFIG,
  ERROR_MESSAGE,
  INGAME_MESSAGE,
  RESPONSE,
};
