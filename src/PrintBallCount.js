const Console = require("@woowacourse/mission-utils").Console;

const PrintBallCount = (ball, strike) => {
  ball == 0
    ? strike == 0
      ? Console.print("낫싱")
      : Console.print(`${strike}스트라이크`)
    : strike == 0
    ? Console.print(`${ball}볼`)
    : Console.print(`${ball}볼 ${strike}스트라이크`);
};

module.exports = PrintBallCount;
