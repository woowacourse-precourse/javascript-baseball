const MissionUtils = require("@woowacourse/mission-utils");

const getRandomNumber = (count) => {
  const computer = [];
  while (computer.length < count) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

class App {
  play() {
    const computer = getRandomNumber(3);

    console.log(computer);

    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

