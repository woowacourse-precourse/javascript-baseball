const MissionUtils = require("@woowacourse/mission-utils");

const pickThreeRandomNumForOneToNine = (RandomNumData = []) => {
  const NUM_REQUIRED = 3;
  if (RandomNumData.length === NUM_REQUIRED) return RandomNumData;
  const numberPickUp = [...RandomNumData];
  const numArray = Array.from({ length: 9 }, (num, i) => i + 1);
  const randomNum = MissionUtils.Random.pickNumberInList(numArray);
  if (!numberPickUp.length && !randomNum)
    return pickThreeRandomNumForOneToNine();
  if (numberPickUp.includes(randomNum))
    return pickThreeRandomNumForOneToNine(numberPickUp);
  numberPickUp.push(randomNum);
  return pickThreeRandomNumForOneToNine(numberPickUp);
};
