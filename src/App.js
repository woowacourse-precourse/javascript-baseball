const MissionUtils = require("@woowacourse/mission-utils");

const START_MESSAGE = "숫자 야구 게임을 시작합니다.";

const printGameStart = () => {
  MissionUtils.Console.print(START_MESSAGE);
};

const createComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return [...computer.join("").toString()];
};

class App {
  play() {
    printGameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
