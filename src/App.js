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
    MissionUtils.Console.readLine("숫자를 입력해 주세요 :", (input) => {
      if (this.playerNumberCheck(input)) {
        
      }
    });
  }
  playerNumberCheck(input) {
    if (input.length !== 3) {
      throw new Error("잘못된 입력입니다.");
    }
    if (new Set(input).size !== 3) {
      throw new Error("잘못된 입력입니다.");
    }
    return true;
  }
}

const app = new App();
app.play();

module.exports = App;