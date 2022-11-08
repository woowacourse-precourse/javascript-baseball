class CompareValue {
  UserInputValueCompareToCPUAnswer(cpuNumber, userInput) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    let checkIndex = [];

    for (let i = 0; i < userInput.length; i++) {
      if (!cpuNumber.includes(userInput[i])) {
        nothing++;
      }
      checkIndex[i] = cpuNumber.indexOf(userInput[i]);
      if (checkIndex[i] == i) {
        strike++;
      }
      if (checkIndex[i] != i && cpuNumber.includes(userInput[i])) {
        ball++;
      }
    }

    if (nothing === 3) {
      return "낫싱";
    }
    if (strike === 3) {
      return "3스트라이크";
    }
    if (strike > 0 && ball === 0) {
      return `${strike}스트라이크`;
    }
    if (strike === 0 && ball > 0) {
      return `${ball}볼`;
    }
    return `${ball}볼 ${strike}스트라이크`;
  }
}
module.exports = CompareValue;
