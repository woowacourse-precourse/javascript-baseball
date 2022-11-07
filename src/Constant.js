const GAME_CONFIG = {
  START_NUMBER: 1,
  END_NUMBER: 9,
  COUNT: 3,
};

const ERROR_CHECK = {
  MESSAGE: "문구가 나오지 않음 : ",
};

const INGAME_MESSAGE = {
  ERROR: "잘못된 값을 입력했습니다 : 입력값",
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ASK: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const GAME_RESULT = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

const RESPONSE = {
  RESTART: "1",
  FINISH: "2",
};

module.exports = {
  GAME_CONFIG,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
};
