const GAME_MESSAGE = Object.freeze({
  NOTIFY_START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  ASK_INPUT_MESSAGE: "숫자를 입력해주세요 : ",
  FINSH_GAME_MESSAGE: "숫자 야구 게임을 종료합니다.",
  ASK_GAME_CONTINUE_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  NOTIFY_INPUT_WRONG_NUMBER: "1또는 2만 입력해주세요.",
  NOTIFY_GAME_CLEAR: `3개의 숫자를 모두 맞히셨습니다 ! 게임 종료`,
  ERROR_NOT_THREE_LENGTH: "세글자의 수만 입력 해주세요.",
  ERROR_NOT_NUMBER: "숫자만 입력 해주세요.",
  ERROR_NOT_IN_RANGE: "1~9사이 숫자만 입력해주세요.",
  ERROR_NOT_DUPLICATED: "같은 수를 입력하지 말아주세요.",
});
module.exports = GAME_MESSAGE;
