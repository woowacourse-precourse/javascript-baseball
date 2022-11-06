const { MAX_NUMBER_LENGTH, RESTART_TRIGGER, QUIT_TRIGGER } = require("./condition.js");

const GAME_START = "숫자 야구 게임을 시작합니다.";
const USER_NUMBER_INPUT_REQUEST = "숫자를 입력해 주세요 : ";
const GAME_OVER = `${MAX_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
const GAME_RESTART_REQUEST = `게임을 새로 시작하려면 ${RESTART_TRIGGER}, 종료하려면 ${QUIT_TRIGGER}를 입력하세요.`;
const GAME_MESSAGE = {
  GAME_START,
  USER_NUMBER_INPUT_REQUEST,
  GAME_OVER,
  GAME_RESTART_REQUEST,
};

const INVALID_INPUT_TYPE = "입력에 숫자 이외의 문자가 있습니다. 게임 종료!";
const INVALID_INPUT_LENGTH = "숫자의 길이가 올바르지 않습니다. 게임 종료!";
const DUPLICATED_NUMBER = "입력에 중복된 숫자가 있습니다. 게임 종료!";
const INVALID_INPUT_RANGE = "입력 가능한 숫자 범위를 벗어났습니다. 게임 종료!";
const INVALID_TRIGGER = "유효하지 않은 입력입니다. 게임 종료!";
const ERROR_MESSAGE = {
  INVALID_INPUT_TYPE,
  INVALID_INPUT_LENGTH,
  DUPLICATED_NUMBER,
  INVALID_INPUT_RANGE,
  INVALID_TRIGGER,
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
