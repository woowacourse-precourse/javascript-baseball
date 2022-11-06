const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.userInput();
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      MissionUtils.Console.print(input);
      MissionUtils.Console.close();
    });
  }

  
}
const test = new App();
test.play();

module.exports = App;
