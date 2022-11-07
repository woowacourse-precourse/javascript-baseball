const GAME_VALUE = {
  RESTART: '1',
  END: '2',
};

const GAME_MESSAGE = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  GAME_INPUT_NUMBERS: "숫자를 입력해주세요 : ",
  GAME_CLEAR: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
};

const ERROR_MESSAGE = {
  ERROR_USERINPUT_RESTART: "잘못된 값을 입력하셨습니다. 1또는 2를 입력해주세요.",
  ERROR_USERINPUT_NOT_VALID: "세 자리 수를 1부터 9까지 중복되지 않도록 입력해주세요!",
};

module.exports = {
  GAME_VALUE,
  GAME_MESSAGE,
  ERROR_MESSAGE,
}