const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  play() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(String(number))) {
        computer.push(String(number));
      }
    }
    console.log(computer);
  }
}

const app = new App();

app.play();

module.exports = App;
