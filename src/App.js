const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    return this.getUserInput();
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 :", (answer) => {
      return this.checkAnswer(answer);
    });
  }

  checkAnswer(userNumber) {}

  createComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

const app = new App();
app.play();

module.exports = App;
