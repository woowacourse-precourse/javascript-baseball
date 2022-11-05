const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let userInput = await this.userInput('숫자를 입력해주세요: ');
    let checkUserNumber = this.checkUserInput(userInput);
    if (checkUserNumber) {
      console.log(checkUserNumber);
    }
  }
  async userInput(prompt) {
    return await new Promise((resolve) => {
      MissionUtils.Console.readLine(prompt, resolve);
    });
  }
  checkUserInput(userInput) {
    const userInputToArr = [...new Set(userInput)];
    if (userInputToArr.length !== 3) {
      MissionUtils.Console.print('조건에 맞게 숫자를 입력해주세요!');
      return 0;
    }
    return userInputToArr;
  }
}

const app = new App();
app.play();

module.exports = App;
