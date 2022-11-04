const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    const computerNumber = setComputerNumber();
  }
}

const app = new App();
app.play();

function setComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

module.exports = App;
