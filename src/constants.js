const NUMBER = {
  LENGTH: 3,
  NOT_INCLUDE: "0",
};

const SCORES = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  INPUT_OPTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
  END: "게임 종료",
};

const ERRORS = {
  OVERLAP: "중복되지 않은 숫자 3개를 입력해주세요.",
  LENGTH: "3자리 입력해주세요.",
  TYPE: "숫자만 입력해주세요.",
  RANGE: "1과 9 사이의 숫자를 입력해주세요",
  OPTION: "잘못된 옵션을 선택하였습니다.",
};

const OPTIONS = {
  RESTART: "1",
  END: "2",
};

module.exports = {
  NUMBER,
  SCORES,
  MESSAGES,
  ERRORS,
  OPTIONS,
};
