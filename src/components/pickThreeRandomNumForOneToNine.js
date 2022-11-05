const MissionUtils = require("@woowacourse/mission-utils");

const pickThreeRandomNumForOneToNine = (RandomNumData = []) => {
  const NUM_REQUIRED = 3;
  if (RandomNumData.length === NUM_REQUIRED) return RandomNumData;
  const numberPickUp = [...RandomNumData];
  const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
  if (numberPickUp.includes(randomNum))
    return pickThreeRandomNumForOneToNine(numberPickUp);
  numberPickUp.push(randomNum);
  return pickThreeRandomNumForOneToNine(numberPickUp);
};

module.exports = pickThreeRandomNumForOneToNine;
