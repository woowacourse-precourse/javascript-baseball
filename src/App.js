const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.inputs = [];
    this.utils = MissionUtils;
  }
  generateNumber() {
    return this.utils.Random.pickNumberInRange(1, 9);
  }
  generateAnswer() {
    const visited = Array.from({ length: 10 }, (_) => false);
    const results = [];

    while (results.length < 3) {
      let newNumber = this.generateNumber();

      while (visited[newNumber]) {
        newNumber = this.generateNumber();
      }
      visited[newNumber] = true;
      results.push(newNumber);
    }

    return results;
  }
  play() {}
}

module.exports = App;
