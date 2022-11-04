const { Random } = require("@woowacourse/mission-utils");

class PickedNumberByComputer {
  randomNumInRange() {
    let pickedNumber = [];
    while (pickedNumber.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!pickedNumber.includes(number)) pickedNumber.push(number);
    }

    return pickedNumber;
  }
}

module.exports = PickedNumberByComputer;
