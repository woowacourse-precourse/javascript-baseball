const MissionUtils = require("@woowacourse/mission-utils");

const readLine = async (message) => {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine(message, (answer) => {
      resolve(answer);
    });
  });
};

const print = (message) => {
  MissionUtils.Console.print(message);
};

const closeConsole = () => {
  MissionUtils.Console.close();
};

const Console = { readLine, print, closeConsole };

const pickNumberInRange = (start, end) => {
  return MissionUtils.Random.pickNumberInRange(start, end);
};

const pickNumberInList = (array) => {
  return MissionUtils.Random.pickNumberInList(array);
};

const pickUniqueNumbersInRange = (start, end, count) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
};

const shuffle = (array) => {
  return MissionUtils.Random.shuffle(array);
};

const Random = {
  pickNumberInRange,
  pickNumberInList,
  pickUniqueNumbersInRange,
  shuffle,
};

module.exports = { Console, Random };
