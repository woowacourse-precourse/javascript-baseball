const MissionUtils = require("@woowacourse/mission-utils");

module.exports = function input(question) {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(question, (input) => {
      resolve(input);
    });
  });
};
