class App {
  #GAME_MSG = {
    START: "숫자 야구 게임을 시작합니다.",
    PLEASE_INPUT: "숫자를 입력해주세요 : ",
    ASK_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    QUIT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  };
  #GAME_RESULT = { STRIKE: "스트라이크", BALL: "볼", NOTHING: "낫싱" };
  #ERROR_MSG = {
    ONLY_NUMBERS: "숫자만 입력해주세요.",
    INVALID_LENGTH: "반드시 3개의 숫자를 입력해주세요.",
    DUPLICATE_NUMBERS: "서로 다른 3개의 숫자를 입력해주세요.",
    ONLY_ONE_OR_TWO: "1 또는 2를 입력해주세요.",
  };
  play() {}
}

module.exports = App;
