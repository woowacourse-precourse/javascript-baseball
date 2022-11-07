const Mission = require("../utils/Mission");

class GetComputerInput extends Mission {
  constructor() {
    super();
  }
  makeRandomNumbers() {
    const storeNumberArray = [];
    while (storeNumberArray.length < 3) {
      const storeNumber = this.missionRandom.pickNumberInRange(1, 9);
      if (!storeNumberArray.includes(storeNumber)) {
        storeNumberArray.push(storeNumber);
      }
    }
    return storeNumberArray.join("");
  }
}

module.exports = GetComputerInput;
