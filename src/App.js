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

  checkTypeNumber(userNumber) {
    for (let i = 0; i < 3; i++) {
      return !isNaN(Number(userNumber[i]));
    }
  }

  checkLength(userNumber) {
    return userNumber.length === 3;
  }

  checkRange(userNumber) {
    return !userNumber.includes('0');
  }

  checkDuplication(userNumber) {
    const splitNumber = userNumber.split('');
    return new Set(splitNumber).size === 3;
  }

  play() {
    this.makeRandomNumbers();
    this.getUserNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
