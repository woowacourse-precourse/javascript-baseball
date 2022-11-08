const INPUT_ERROR_MESSAGE = {
  NO_EMPTY: "입력값 사이에 빈칸이 없도록 입력해주세요.",
  ONLY_THREE: "3자리의 숫자를 입력해주세요.",
  ONLY_NUMBER: "숫자만 입력해주세요.",
};

const RESTART_MESSAGE = {
  QUESTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  ERROR: "1또는 2만 입력할 수 있습니다.",
};

const BASE_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_REQUEST: "숫자를 입력해주세요 : ",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

const JUDGE_MESSAGE = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  THREE_STRIKE: "3스트라이크",
};

module.exports = {
  INPUT_ERROR_MESSAGE,
  RESTART_MESSAGE,
  BASE_MESSAGE,
  JUDGE_MESSAGE,
};
