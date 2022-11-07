const MESSAGE = Object.freeze({
  INTRO: "숫자 야구 게임을 시작합니다.",

  OUTRO: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",

  REPLAY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",

  READ_ANSWER: "숫자를 입력해주세요 : ",

  BALL: {
    0: "낫싱",
    1: "1볼",
    2: "2볼",
    3: "3볼",
  },

  STRIKE: {
    0: "",
    1: "1스트라이크",
    2: "2스트라이크",
    3: "3스트라이크",
  },
});

const FLAG = Object.freeze({
  REPLAY: "1",
  EXIT: "2",
});

module.exports = { MESSAGE, FLAG };
