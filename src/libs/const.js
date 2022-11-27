const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  INPUT_OPTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

const ERROR_MESSAGE = {
  ANSWER:
    "중복되지 않는 1~9 사이의 숫자 3개를 입력하지 않아 애플리케이션이 종료됩니다.",
  OPTION: "1 또는 2를 입력하지 않아 애플리케이션이 종료됩니다.",
};

const OPTION = {
  RESTART: "1",
  EXIT: "2",
};

const OUTPUT = {
  NOTHING: "낫싱",
  BALL: "볼",
  STRIKE: "스트라이크",
};

module.exports = {
  MESSAGE,
  OPTION,
  OUTPUT,
  ERROR_MESSAGE,
};
