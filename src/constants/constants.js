const GAME_MESSAGE = {
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  ENTER_NUMBER: "숫자를 입력해주세요 : ",
  FINISH_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  GAME_END: "게임 종료\n",
};

const WHAT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const ERROR_MESSAGE = {
  ERROR_RESTART_MESSAGE: "잘못된 값을 입력하셨습니다. 1 또는 2를 입력해주세요.",
  ERROR_USER_INPUT:
    "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.",
};

module.exports = {
  GAME_MESSAGE,
  WHAT,
  ERROR_MESSAGE,
};
