//// 필요한 변수 정리를 위한 config.js 생성

// 게임에 필요한 숫자 범위 설정
const GAME_NUMBER = {
  NUMBER_MIN: 1,
  NUMBER_MAX: 9,
  NUMBER_LENGTH: 3,
};

// 숫자야구 게임 결과 종류
const GAME_RESULT = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

// 게임 진행 문구
const GAME_TEXT = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 :",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

// 게임 종료 및 새로 시작 조건
const GAME_RESTART = {
  RESTART: "1",
  END: "2",
};

module.exports = {
  GAME_NUMBER,
  GAME_RESULT,
  GAME_TEXT,
  GAME_RESTART,
};
