const MissionUtils = require('@woowacourse/mission-utils');

const checkStrike = (computer, user) => {
  let countStrike = 0;

  Array.from(user, Number).map((currentValue, index) => {
    if (
      computer.includes(currentValue) &&
      computer.indexOf(currentValue) === index
    ) {
      countStrike += 1;
    }

    return countStrike;
  });

  return MissionUtils.Console.print(countStrike)
};

module.exports = checkStrike;
