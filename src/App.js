const MissionUtils = require("@woowacourse/mission-utils");


class App {
  
  play() {
    const computer = this.getRandomNumberString();
  }

  getRandomNumberString() {
    let randomNumberList = [];
    while (randomNumberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberList.includes(number)) {
        randomNumberList.push(number);
      }
    }
    return randomNumberList.join('');
  }
}

module.exports = App;
