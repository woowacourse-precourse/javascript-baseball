const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

function getComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }

  return computerNumber;
}

module.exports = App;
