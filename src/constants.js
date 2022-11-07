const GUIDE_MESSAGE = {
  START_MSG: "숫자 야구 게임을 시작합니다.",
  PROCESS_MSG: "숫자를 입력해주세요 : ",
  CORRECT_MSG: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  MANAGE_GAME_MSG: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  FINISH_MSG: "게임 종료",
};

const ERROR_MESSAGE = {
  GUIDE_MSG:
    "\n1 ~ 9로 구성되고, 3자리가 모두 다른 숫자 3개를 입력해주세요.\n애플리케이션을 종료합니다.",
  INPUT_MORE_MSG: "글자 더 입력하셨습니다.",
  INPUT_LESS_MSG: "글자 덜 입력하셨습니다.",
  DUPLICATED_MSG:
    "숫자끼리 중복되어서는 안됩니다.\n세 자리 모두 다른 수를 입력해주세요.",
  HAS_ZERO_MSG: "숫자 0이 포함되었습니다. ",
  IS_NOT_A_NUMBER_MSG: "는 숫자가 아닙니다. ",
};

module.exports = {
  GUIDE_MESSAGE,
  ERROR_MESSAGE,
};
