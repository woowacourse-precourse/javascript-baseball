"use strict";

const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {
  play() {}

  generateRandomAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  validateInput(playerInput) {
    const INPUT_REGEX = /^[1-9]{3}$/;
    if (!INPUT_REGEX.test(playerInput)) {
      return false;
    }

    const noDuplicatedNumber = new Set([...playerInput]);
    if (noDuplicatedNumber.size !== 3) {
      return false;
    }

    return true;
  }
}

module.exports = App;
