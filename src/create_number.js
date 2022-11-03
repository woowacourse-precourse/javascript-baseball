const MissionUtils = require("@woowacourse/mission-utils");

function picked_computer_number() {
    const pick_number = [];
    while (pick_number.length < 3) {
      const computer_number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!pick_number.includes(computer_number)){
        pick_number.push(computer_number);
    }
  }
  return pick_number.join("");
}
module.exports = picked_computer_number();