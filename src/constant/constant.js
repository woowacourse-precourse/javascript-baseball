const MAX_NUMBER = 3;

const GAME_MESSAGE = {
  NOTHING: "낫싱",
  STRIKE: "스트라이크",
  BALL: "볼",
  WIN: "3스트라이크",
};

const ERROR_MESSAGE = {
  IS_INCLUDE_ZERO: "1부터 9사이의 정수를 입력해 주세요.",
  IS_MAX_NUMBER: "세자리 숫자를 입력해주세요!",
  IS_NUMBER: "숫자를 제외한 문자를 입력하셨습니다",
  IS_REPETITION: "서로 다른 세 숫자를 입력해주세요!",
  IS_RESTART: "1이나 2를 제외한 다른 문자를 입력하셨습니다!",
};

const ANNOUNCEMENT_MESSAGE = {
  INPUT: "숫자를 입력해주세요",
  WIN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: {
    MESSAGE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    START: "1",
    FINISH: "2",
  },
  START: "숫자 야구 게임을 시작합니다.",
  END: "게임 종료",
};

module.exports = {
  MAX_NUMBER,
  ERROR_MESSAGE,
  ANNOUNCEMENT_MESSAGE,
  GAME_MESSAGE,
};
