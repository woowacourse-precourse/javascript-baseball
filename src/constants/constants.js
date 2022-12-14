const MSG = {
  START: "자동차 경주 게임을 시작합니다.",
  INPUT_AMOUNT: "\n자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n",
  INPUT_TRIES: "\n시도할 횟수를 입력해주세요.\n",
  RESULT: "실행 결과\n",
  WINNER: "최종 우승자: ",
};

const ERR_MSG = {
  LENGTH_ERR: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  DUP_ERR: "[ERROR] 자동차 이름은 서로 달라야 합니다.",
  TRIES_ERR: "[ERROR] 1 이상의 정수를 입력해주세요.",
};

const MIN = 0;
const MAX = 9;
const CONDITION_UNIT = 4;
const STEP = "-";

module.exports = {
  MSG,
  ERR_MSG,
  MIN,
  MAX,
  CONDITION_UNIT,
  STEP,
};
