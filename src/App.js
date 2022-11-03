const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = this.createComputerNumber();
  }

  createComputerNumber = () => {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.isEveryNumberUnique(computerNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  };

  isEveryNumberUnique = (nums) => {
    return nums.length === new Set(nums).size;
  };

  play() {}
}

module.exports = App;
