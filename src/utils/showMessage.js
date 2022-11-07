const MissionUtils = require("@woowacourse/mission-utils");

const showMessage = (score) => {
  const { strike, ball } = score;
  if (strike > 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike > 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (strike === 0 && ball === 0) {
    MissionUtils.Console.print(`낫싱`);
  }
};
module.exports = showMessage;
