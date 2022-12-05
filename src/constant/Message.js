const { VALUE } = require("./Value");

const MESSAGE = {
  gameStart: "숫자 야구 게임을 시작합니다.",

  gameResult: {
    nothing: "낫싱",
    congraturation: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  },

  input: {
    number: "숫자를 입력해주세요 : ",
    command: `게임을 새로 시작하려면 ${VALUE.command.restart}, 종료하려면 ${VALUE.command.finish}를 입력하세요.\n`,
  },
};

module.exports = { MESSAGE };
