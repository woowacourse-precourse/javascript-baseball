const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {}

  generateComputerAnswer(){
    const COMPUTER_RANDOM_NUMBER = [];
    while (COMPUTER_RANDOM_NUMBER.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_RANDOM_NUMBER.includes(RANDOM_NUMBER)) {
        COMPUTER_RANDOM_NUMBER.push(RANDOM_NUMBER);
      }
    }
    return COMPUTER_RANDOM_NUMBER;
  }
}

module.exports = App;
