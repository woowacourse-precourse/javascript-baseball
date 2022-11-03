const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    ComputerNumber()
  }
}

class User {
  constructor() {
    this.UserNumber;
  }
  GetNum() {
    return this.UserNumber;
  }
}

const ComputerNumber = () => {
  const NUMBER = String(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
  return NUMBER.split(",");
}
module.exports = App;