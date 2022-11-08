const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

function start() {
  MissionUtils.Console.print(constants.MESSAGE.START);
}

exports.start = start;