const GAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
};

const NUMBER_VALUE = {
  MIN: 1,
  MAX: 9,
  LENGTH: 3,
};

const ERROR_MESSAGE = {
  TYPE_ERROR: "숫자형식 값만 입력해주세요.",
  RANGE_ERROR: "1 ~ 9 사이의 숫자만 입력해주세요.",
  UNIQUE_ERROR: "숫자가 중복되지 않게 입력해주세요.",
  LENGTH_ERROR: `${NUMBER_VALUE.LENGTH} 자릿수 까지만 입력해주세요.`,
};

const RESULT = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

module.exports = { GAME_MESSAGE, NUMBER_VALUE, ERROR_MESSAGE, RESULT };
