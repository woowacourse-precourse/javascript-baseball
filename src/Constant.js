const SYS_MESSAGE = {
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  FINISH_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_MESSAGE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요",
  INPUT_MESSAGE: "숫자를 입력해주세요 : ",
  ERROR_MESSAGE: "유효하지 않은 입력값 입니다.",
  END_MESSAGE: "종료",
};

const BALL_STATE = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const LENGTH = 3;

const RANGE = {
  MIN: 1,
  MAX: 9,
};

module.exports = { SYS_MESSAGE, BALL_STATE, LENGTH, RANGE };
