const INPUT_MESSAGE = Object.freeze({
  AMOUNT: "숫자를 입력해주세요 : ",
  RESTART_END: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

const PRINT_MESSAGE = Object.freeze({
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  STRIKE: "스트라이크",
  CORRECT_STRIKE: "3스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  END_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

const ERROR_MESSAGE = Object.freeze({
  SAME_DIGIT: "숫자는 3자리로 입력해야합니다.",
  DIFFERENT_NUMBER: "서로 다른 숫자여야 합니다",
  RANGE_NUMBER: "1~9 숫자만 입력해주세요",
});

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE,
};
