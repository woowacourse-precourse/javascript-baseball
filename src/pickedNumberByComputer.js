const MissionUtils = require("@woowacourse/mission-utils");

function pickedNumberByComputer() {
  let pickedNumber = [];
  while (pickedNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!pickedNumber.includes(number)) pickedNumber.push(number);
  }

  return pickedNumber.join("");
}

module.exports = pickedNumberByComputer;
