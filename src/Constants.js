const REPLY = Object.freeze({
  REPLAY: "1",
  GAME_END: "2",
});

const MESSAGE = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  ASK_REPLAY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  GAME_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ASK_NUMBER: "숫자를 입력해주세요 :",
});

const ERROR_MESSAGE = Object.freeze({
  REPEAT: "서로 다른 숫자 3개를 입력해야 합니다.",
  QUANTITY: "숫자 3개를 입력해야 합니다.",
  NOT_NUMBER: "숫자만 입력해야 합니다.",
  HAS_ZERO: "숫자 0은 입력할 수 없습니다.",
  WRONG_REPLY: "잘못된 값을 입력하셨습니다.",
});

const BASEBALL_TERM = Object.freeze({
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
});

module.exports = { REPLY, MESSAGE, ERROR_MESSAGE, BASEBALL_TERM };
