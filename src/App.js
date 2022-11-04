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

const getUserInput = () => {
  let userAnswer;
  MissionUtils.Console.readLine("사용자가 입력한 숫자 불러오기", (userValue) => {
    if (userValue) {
      userAnswer = userValue;
    }
  });
  return userAnswer;
};



class App {
  play() {
  }
}

module.exports = App;
