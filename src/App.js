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

const printResult = (user, computer) => {
  let [strike, ball] = compareUserAndComputer(user, computer);

  if (strike === 0 && ball === 0) { MissionUtils.Console.print("낫싱")};
  if (strike === 1 && ball === 0) { MissionUtils.Console.print("1스트라이크")};
  if (strike === 2 && ball === 0) { MissionUtils.Console.print("2스트라이크")};
  if (strike === 3 && ball === 0) { MissionUtils.Console.print("3스트라이크")};
  if (strike === 0 && ball === 1) { MissionUtils.Console.print("1볼")};
  if (strike === 0 && ball === 2) { MissionUtils.Console.print("2볼")};
  if (strike === 1 && ball === 1) { MissionUtils.Console.print("1볼 1스트라이크")};
  if (strike === 1 && ball === 2) { MissionUtils.Console.print("2볼 1스트라이크")};
}



class App {
  play() {
  }
}

module.exports = App;
