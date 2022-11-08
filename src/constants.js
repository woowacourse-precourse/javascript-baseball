const THREE_DIGISTS = 3;

const COMMAND = {
  RESTART: 1,
  END: 2,
};

const GAME_SENTENCE = {
  START: "숫자 야구 게임을 시작합니다.",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  PLAYER_INPUT: "숫자를 입력해주세요 : ",
};

const COUNT = {
  STRIKE: (count) => `${count}스트라이크`,
  BALL: (count) => `${count}볼`,
  NOTHING: "낫싱",
};

module.exports = {
  COMMAND,
  THREE_DIGISTS,
  GAME_SENTENCE,
  COUNT,
};
