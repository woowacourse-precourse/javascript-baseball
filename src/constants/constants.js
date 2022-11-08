const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const RESULT = {
  NOTHING: "낫싱",
  STRIKE: "스트라이크",
  BALL: "볼",
};

const RESTART_INPUT = {
  YES: "1",
  NO: "2",
};

const ERROR = {
  INVALID_LENGTH: "입력값의 길이가 올바르지 않습니다.",
  INVALID_RANGE: "입력값의 범위가 올바르지 않습니다.",
  INVALID_RESTART: "재시작 여부 입력이 올바르지 않습니다.",
  INVALID_DUPLICATE: "입력값에 중복된 숫자가 있습니다.",
};

module.exports = {
  MESSAGE,
  RESULT,
  RESTART_INPUT,
  ERROR,
};
