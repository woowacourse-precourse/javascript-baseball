const MissionUtils = require("@woowacourse/mission-utils");

const readLine = async (message) => {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine(message, (answer) => {
      resolve(answer);
    });
  });
};
