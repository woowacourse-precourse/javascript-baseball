const GAME_LENGTH = 3;

const STRIKE = "스트라이크";
const BALL = "볼 ";
const NOTHING = "낫싱";

const GAME_MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  END: `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const ERROR = {
  RESTART: "1 또는 2를 입력해주세요.",
  NOT_NUMBER: "숫자를 입력해주세요.",
  NOT_ZERO: "0이 아닌 1~9 사이 숫자를 입력해주세요.",
  DUPLICATED: "서로 다른 숫자를 입력해주세요.",
  LENGTH: `3개의 숫자를 입력해주세요.`,
};

module.exports = {
  GAME_LENGTH,
  STRIKE,
  BALL,
  NOTHING,
  GAME_MESSAGES,
  ERROR,
};
