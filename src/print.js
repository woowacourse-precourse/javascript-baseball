const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

function start() {
  MissionUtils.Console.print(constants.MESSAGE.START);
}

function result(resultValue) {
  let resultMessage = '';
  if(resultValue.ball) resultMessage += `${resultValue.ball}볼 `;
  if(resultValue.strike) resultMessage += `${resultValue.strike}스트라이크`;
  if(resultMessage === '') resultMessage = '낫싱';
  MissionUtils.Console.print(resultMessage);
}

exports.start = start;
exports.result = result;