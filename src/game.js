const MissionUtils = require("@woowacourse/mission-utils");

class NumericBaseballGame {
  constructor() {}

  async start() {
    const setComputerNumber = () => {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      console.log("in start", this.computer);
      return computer;
    };

    // const setUserNumber = () => {};
    const numberFromComputer = setComputerNumber();
  }
}

module.exports = NumericBaseballGame;
