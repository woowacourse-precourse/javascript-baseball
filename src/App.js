const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  makeRandomNumbers() {
    const computerNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerNumberArray = computerNumber;
  }

  getUserNumbers() {
    Console.readLine('숫자를 입력해주세요 :', (userNumber) => {
      this.changeUserNumbersToArray(userNumber);
    });
  }

  changeUserNumbersToArray(userNumber) {
    const changeNumber = (string) => Number(string);
    this.userNumberArray = Array.from(userNumber, changeNumber);
  }

  play() {
    this.makeRandomNumbers();
    this.getUserNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
