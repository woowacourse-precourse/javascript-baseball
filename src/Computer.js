const MissionUtils = require("@woowacourse/mission-utils");

class Computer {

  constructor(ComputerNumbers){
    this.ComputerNumbers = ComputerNumbers;
  }

  setComputerNumbers(){
    this.ComputerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
  }

  getComputerNumbers(){
    return this.ComputerNumbers;
  }

}

module.exports = Computer;
