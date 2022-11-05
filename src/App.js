const MissionUtils = require("@woowacourse/mission-utils");

function makeComputerRandNums() {
  const randNumsArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  return randNumsArr;
}

function playGame() {
  while (true) {
    const computerRandNumsArr = makeComputerRandNums();
    console.log(computerRandNumsArr);
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