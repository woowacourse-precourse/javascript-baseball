const MissionUtils = require("@woowacourse/mission-utils");

const getComputerInputOneByOne = () => {
  let computerInput;
  computerInput = MissionUtils.Random.pickNumberInRange();
  return computerInput;
}

const getComputerInput = () => {
  let inputString = "";
  for (let i=0 ; i < 3 ; i++){
    inputString += getComputerInputOneByOne();
  }
  return inputString;
}

class App {
  play() {
  }
}

module.exports = App;
