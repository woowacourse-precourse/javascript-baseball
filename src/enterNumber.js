const MissionUtils = require("@woowacourse/mission-utils");

function enterNumber(comment) {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(comment, (pickedNumberByUser) => {
      resolve(pickedNumberByUser);
    });
  });
}

module.exports = enterNumber;
