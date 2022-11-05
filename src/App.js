const MissionUtils = require('@woowacourse/mission-utils');

class App {
  createNumberList() {
    const numberList = [];
    while (numberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberList.includes(number)) numberList.push(number);
    }
    return numberList;
  }
  play() {}
}

module.exports = App;
