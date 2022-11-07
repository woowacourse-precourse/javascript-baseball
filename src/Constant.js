const GAME_MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  END_OPTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const RANGE_NUMBER = {
  MIN_RANGE: 1,
  MAX_RANGE: 9,
};

const ERROR_MESSAGES = {
  ONLY_NUMBER: "숫자를 입력해주세요 어플리케이션을 종료합니다",
  ONLY_NUMBER_1_AND_2: "1,2 만 입력해주세요",
  ONLY_THREE_LENGTH_NUMBER: "3자리수를 입력해주세요. 어플리케이션을 종료합니다",
  NOT_DUPLICATE: "중복되지 않은 숫자 3자리를 입력해주세요",
  NOT_DECIMAL_AND_MINUS: "소수점과 마이너스는 허용되지않습니다.",
};

module.exports = { GAME_MESSAGES, RANGE_NUMBER, ERROR_MESSAGES };
