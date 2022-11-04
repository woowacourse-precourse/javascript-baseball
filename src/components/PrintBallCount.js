const MissionUtils = require("@woowacourse/mission-utils");

const PrintBallCount = (ball, strike) => {
  if (ball === 0 && strike > 0)
    MissionUtils.Console.print(`${strike}스트라이크`);
  if (strike === 0 && ball > 0) MissionUtils.Console.print(`${ball}볼`);
  if (strike > 0 && ball > 0)
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  if (ball === 0 && strike === 0) MissionUtils.Console.print("낫싱");
};

module.exports = PrintBallCount;
