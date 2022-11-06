const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;
class App {
  randomNumbers;
  userInputs;

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.saveUserInputs();
  }

  saveRandomNumbers() {
    this.randomNumbers = [];
    while (this.randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  saveUserInputs() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userInputs = answer;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
