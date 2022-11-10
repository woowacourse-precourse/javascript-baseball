const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  SELECT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  ERROR: "입력 형식이 잘못되었습니다. 서로 다른 3개의 숫자를 입력하세요.",
  END_ERROR: "입력 형식이 잘못되었습니다.",
  OUT: "3스트라이크",
};

const BALLCOUNT_HINT = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

const NUMBER = {
  START: 1,
  END: 9,
  LENGTH: 3,
  RESTART: 1,
  EXIT: 2,
};

module.exports = { MESSAGE, BALLCOUNT_HINT, NUMBER };
