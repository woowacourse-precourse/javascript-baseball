const MESSAGE = {
  START_GAME: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  INPUT_EXCEPTION: "잘못된 값을 입력하셨습니다! 게임이 종료됩니다.",
  STRIKE_OUT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_TERMINATE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const BALL_COUNT = {
  ONE_STRIKE: "1스트라이크",
  TWO_STRIKE: "2스트라이크",
  THREE_STRIKE: "3스트라이크",
  ONE_BALL: "1볼",
  TWO_BALL: "2볼",
  THREE_BALL: "3볼",
  NOTHING: "낫싱",
};

const GAME_PROGRESS = {
  RESTART: "1",
  TERMINATE: "2",
};

const ANSWER_LENGTH = 3;

module.exports = { MESSAGE, BALL_COUNT, GAME_PROGRESS, ANSWER_LENGTH };
