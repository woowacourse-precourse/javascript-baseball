const MissionUtils = require("@woowacourse/mission-utils");

function makeComputerRandNums() {
  const randNumsArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  return randNumsArr;
}

function isValidInput(input) {
  console.log(input);
}

function getUserInput() {
  let userInput;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    isValidInput(input)
  })
  return userInput;
}

function playGame() {
  while (true) {
    const computerRandNumsArr = makeComputerRandNums();
    getUserInput();
    break;
  }
}

class App {
  constructor() {
  }

  play() {
    playGame();
  }
}

module.exports = App;
const a = new App()
a.play();