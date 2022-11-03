const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let answers = init();
    // while (1) {
    //   MissionUtils.Console.readLine("숫자를 입력해주세요:", (number) => {});
    // }
  }
}

const init = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const app = new App();
app.play();

module.exports = App;
