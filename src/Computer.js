const MissionUtils = require("@woowacourse/mission-utils");

class Computer {

  constructor(ComputerNumbers){
    this.ComputerNumbers = ComputerNumbers;
  }

  setComputerNumbers(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.ComputerNumbers = computer
  }

  getComputerNumbers(){
    return this.ComputerNumbers;
  }

}

module.exports = Computer;
