const ERROR = {
  WRONG_INPUT: "잘못된 입력입니다.",
  WRONG_SELECTION: "1 또는 2만 입력 가능",
};

const RESULT = {
  STRIKE: "스트라이크",
  BALL: "볼",
  GAME_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  NOTHING: "낫싱",
};

const MESSAGE = {
  START_GAME: "숫자 야구 게임을 시작합니다.",
  INSERT_NUMBER: "숫자를 입력해주세요 : ",
  START_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
};

module.exports = { ERROR, RESULT, MESSAGE };
