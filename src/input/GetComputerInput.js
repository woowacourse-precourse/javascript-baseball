class GetComputerInput {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
  }
  makeRandomNumbers() {
    const storeNumberArray = [];
    while (newArr.length < 3) {
      const storeNumber = this.missionRandom.pickNumberInRange(1, 9);
      if (!storeNumberArray.includes(storeNumber)) {
        storeNumberArray.push(storeNumber);
      }
    }
    return storeNumberArray.join("");
  }
}

module.exports = GetComputerInput;
