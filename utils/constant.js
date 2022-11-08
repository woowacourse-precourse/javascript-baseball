const GAME_STATE_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  WIN: "3개의 숫자를 모두 맞히셨습니다!",
  END: "게임 종료",
  RESET_0R_END: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const RANDOM_NUMBER = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  MAX_SIZE: 3,
});

const EXECPTION_CONDITION = Object.freeze({
  RESTART: "1",
  END: "2",
});

const ERROR_MESSAGE = Object.freeze({
  TYPE_ERROR: "잘못된 입력입니다. 게임 규칙에 알맞게 입력해주십시오.",
});

module.exports = {
  GAME_STATE_MESSAGE,
  RANDOM_NUMBER,
  EXECPTION_CONDITION,
  ERROR_MESSAGE,
};
