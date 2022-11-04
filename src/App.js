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

const compareUserAndComputer = (user, computer) => {
  user = [...user];
  computer = [...computer];
  let i = 0;
  let strike = 0;
  let ball = 0;
  user.forEach(element => {
    if (computer.includes(element)){
      if (element === computer[i]) { strike += 1 }
      else { ball += 1}
    }
    i += 1;
  });

  return [strike, ball];
}



class App {
  play() {
  }
}

module.exports = App;
