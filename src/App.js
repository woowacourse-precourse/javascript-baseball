const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {

  }
}

const computerRandom = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

class gameStart {
  start() {
    let computer = computerRandom();
    this.computer = this.handleComputer(computer);
  }

  handleComputer(computer) {
    return (computer.join(''))
  }

}

module.exports = App;