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
  isRepeated(inputs) {
    const visited = Array.from({ length: 10 }, (_) => false);
    for (let i = 0; i < inputs.length; i++) {
      const curNum = inputs[i];
      if (visited[curNum]) return true;
      visited[curNum] = true;
    }
    return false;
  }
  validateInput(inputs) {
    //음수나, 9초과의 수가 입력된다면 숫자 길이에서 걸러지기 때문에 별도의 처리를 하지 않았습니다.
    if (inputs.length !== 3) throw new Error("세자리의 수를 입력해주세요.");
    if (isNaN(inputs.join(""))) throw new Error("숫자가 아닙니다.");
    if (this.isRepeated(inputs)) throw new Error("반복되는 숫자가 있습니다.");
  }
  play() {}
}

module.exports = App;
