const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print(START_MESSAGE);
    this.getComputerNumber();
  }
  
  getComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      number = number.toString();
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
    this.playerInput(computer);
  }

  playerInput(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :.", (input) => {
    });
  }

}

const app = new App();
app.play();

module.exports = App;