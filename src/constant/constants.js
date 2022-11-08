const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료 ",
  CONTINUE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
  WRONG_INPUT: "숫자를 잘못 입력하셨습니다 게임이 종료됩니다! ",
};

const RESULT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const CONTINUE_OR_NOT = {
  CONTINUE: "1",
  TERMINATE: "2",
};

const NUMBER_COUNT = 3;

module.exports = {
  MESSAGE,
  RESULT,
  NUMBER_COUNT,
};
