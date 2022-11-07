const MissionUtils = require("@woowacourse/mission-utils");

class System {
  constructor() {
    this.numberArray;
  }

  set setNumber(numberArray) {
    this.numberArray = numberArray;
  }

  get getNumber() {
    return this.numberArray;
  }
}

module.exports = System;
