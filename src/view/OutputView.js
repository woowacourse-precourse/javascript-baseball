const Console = require("@woowacourse/mission-utils").Console;

const OutputView = {
  MESSAGE_START: "숫자 야구 게임을 시작합니다.",
  MESSAGE_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  printStart() {
    Console.print(this.MESSAGE_START);
  },
  printResult(result) {
    Console.print(result);
  },
  printEnd() {
    Console.print(this.MESSAGE_END);
  },
};

module.exports = OutputView;
