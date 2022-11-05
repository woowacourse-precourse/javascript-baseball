const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    let userNumber = await this.userInput('숫자입력: ');
    console.log(userNumber);
  }
  async userInput(prompt) {
    return await new Promise((resolve) => {
      MissionUtils.Console.readLine(prompt, resolve);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
