const MissionUtils = require("@woowacourse/mission-utils");
class App {
  createComputerNumber() {
    const eachNumberArray = [];
    while (eachNumberArray.length < 3) {
      let eachNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!eachNumberArray.includes(eachNumber)) {
        eachNumberArray.push(eachNumber);
      }
    }
    return eachNumberArray.join("");
  }
  play() {}
}

new App();

module.exports = App;
