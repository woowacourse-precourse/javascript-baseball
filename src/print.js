const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

function start() {
  MissionUtils.Console.print(constants.MESSAGE.START);
}

function result(resultValue) {
  let resultMessage = '';
  if(resultValue.ball) resultMessage += `${resultValue.ball}${constants.RESULT_COUNT.BALL} `;
  if(resultValue.strike) resultMessage += `${resultValue.strike}${constants.RESULT_COUNT.STRIKE}`;
  if(resultMessage === '') resultMessage = constants.RESULT_COUNT.NOTHING;
  MissionUtils.Console.print(resultMessage);
}

exports.start = start;
exports.result = result;