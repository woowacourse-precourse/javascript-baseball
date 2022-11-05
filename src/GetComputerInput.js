class GetComputerInput {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
  }
  makeRandomNumbers() {
    const newArr = [];
    while (newArr.length < 3) {
      const i = this.missionRandom.pickNumberInRange(1, 9);
      if (!newArr.includes(i)) {
        newArr.push(i);
      }
    }
    return newArr.join("");
  }
}

module.exports = GetComputerInput;
