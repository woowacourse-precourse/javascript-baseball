const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  ERROR: "유효하지 않은 값을 입력했습니다.",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  SELECT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const HINT = Object.freeze({
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const SELECT = Object.freeze({
  RESTART: "1",
  EXIT: "2",
});

module.exports = {
  MESSAGE,
  HINT,
  SELECT,
};
