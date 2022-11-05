class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
    this.score = require("./play/GetScore");
    this.user = require("./input/userInputValid");
  }

  play() {
    return this.getUserInput();
  }

  getUserInput() {
    const computerInputNumbers = this.makeRandomNumbers();

    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      if (new this.user(userInputNumbers).checkValid()) {
        console.log(computerInputNumbers, userInputNumbers);
        const scoreCount = new this.score(computerInputNumbers, userInputNumbers);
        this.missionConsole.print(scoreCount.compare());
      }
      this.missionConsole.close();
    });
  }
}
const app = new App();
app.play();

module.exports = App;
