const MissionUtils = require("@woowacourse/mission-utils");

const { VALUE } = require("../constant/Value");

const RandomNumberMaker = () => {
  let pickedNumber = [];
  while (pickedNumber.length < VALUE.computerNumberRange.length) {
    let number = MissionUtils.Random.pickNumberInRange(
      VALUE.computerNumberRange.minimum,
      VALUE.computerNumberRange.maximum
    );
    if (!pickedNumber.includes(number)) pickedNumber.push(number);
  }
  return pickedNumber;
};

module.exports = RandomNumberMaker;
