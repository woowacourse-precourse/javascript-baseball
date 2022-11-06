const Console = require("@woowacourse/mission-utils").Console;

const PrintBallCount = (ball, strike) => {
  if (ball === 0 && strike > 0) Console.print(`${strike}스트라이크`);
  if (strike === 0 && ball > 0) Console.print(`${ball}볼`);

  ball === 0 && strike === 0
    ? Console.print("낫싱")
    : ball !== 0 && strike !== 0
    ? Console.print(`${ball}볼 ${strike}스트라이크`)
    : null;
};

module.exports = PrintBallCount;
