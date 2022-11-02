const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class App {
  inputNumber;
  computer = new Computer();

  play() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNumber = input;
      console.log(this.inputNumber);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
