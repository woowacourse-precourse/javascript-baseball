const GAME = {
  RUN: 1,
  STOP: 2,
};

const COMPUTER_NUMBER = {
  MIN_RANGE: 1,
  MAX_RANDE: 9,
  LENGTH: 3,
};

const SCORE = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

const GAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_PLAYER_NUMBER: "숫자를 입력해주세요 : ",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REPLAY_OR_STOP: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

const ERROR_MESSAGE = {
  LENGTH: "3자리의 수를 입력해주세요.",
  RANGE: "1부터 9까지의 수만 입력해주세요.",
  DUPLICATED: "서로 다른 3자리를 입력해주세요.",
  NOT_A_NUMBER: "숫자로만 입력해주세요.",
  REAPLY_NUM: "1 또는 2를 입력하세요.",
};

module.exports = {
  ERROR_MESSAGE,
  GAME,
  GAME_MESSAGE,
  SCORE,
  COMPUTER_NUMBER,
};
