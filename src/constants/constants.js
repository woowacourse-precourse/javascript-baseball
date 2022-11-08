const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  INPUT_ERROR: "잘못된 값을 입력하셨습니다!",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_TERMINATE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  RESTART: "1",
  TERMINATE: "2",
  THREE_STRIKE: 3,
};

const ANSWER_LENGTH = 3;

const RANDOM = {
  START_INCLUSIVE: 1,
  END_INCLUSIVE: 9,
  NUMBER_LENGTH: 3,
};

module.exports = { MESSAGE, ANSWER_LENGTH, RANDOM };
