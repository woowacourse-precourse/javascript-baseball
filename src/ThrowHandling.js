const MissionUtils = require("@woowacourse/mission-utils");

const throwHandling = (user) => {
  const userSet = new Set(user);
  if (user.length !== 3) {
    throw MissionUtils.Console.close();
  };
  if (userSet.size !== user.length) {
    throw MissionUtils.Console.close();
  };
  if (user.indexOf("0") >= 0) {
    throw MissionUtils.Console.close();
  };
};
module.exports = throwHandling;