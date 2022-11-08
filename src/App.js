const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  createRandomComNum() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 10);
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum);
      }
    }
    return randomNums;
  }
  
}

const app = new App();
app.play();

module.exports = App;
