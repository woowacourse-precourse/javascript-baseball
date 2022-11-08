const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
});

const RANDOM_NUMBER = Object.freeze({
  MAX: 9,
  MIN: 1,
  LENGTH: 3,
  RANGE: /^[1-9]*$/,
});

const END_INPUT = Object.freeze({
  START: 1,
  END: 2,
});

const SCORE = Object.freeze({
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const ERROR = Object.freeze({
  INPUT_THREE_NUMBER: "1부터 9까지 서로 다른 숫자 3개를 입력해주세요",
  INPUT_ONE_OR_TWO: "1 또는 2를 입력해주세요",
});

module.exports = {
  MESSAGE,
  RANDOM_NUMBER,
  END_INPUT,
  SCORE,
  ERROR,
};
