/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
    this.userNumberInput = '';
    this.userNumberArray = [];
    this.userNumberSet = new Set();
  }

  // get userNumberArray() {
  //   return this.serNumberArray;
  // }

  // set userNumberArray(array) {
  //   this.userNumberArray = array;
  // }

  isSameNumber() {
    this.userNumberArray = this.userNumberInput
      .split('')
      .map((number) => parseInt(number, 10));
    this.userNumberSet = new Set(this.userNumberArray);
    // console.log(
    //   `arr ${this.userNumberArray.length} set ${this.userNumberSet.size}`,
    // );
    return this.userNumberArray.length !== this.userNumberSet.size;
  }

  isOutRangeNumber() {
    const checkedNumberArray = this.userNumberArray.filter(
      (number) => number > 0 && number < 10,
    );
    return this.userNumberArray.length !== checkedNumberArray.length;
  }

  checkInvalidInput() {
    if (
      !this.userNumberInput ||
      this.userNumberInput.length !== 3 ||
      isNaN(this.userNumberInput, 10) ||
      this.isSameNumber() ||
      this.isOutRangeNumber()
    ) {
      throw new Error('3자리 숫자를 입력하세요');
    }
  }

  play() {
    MissionUtils.Console.print(this.computerNumberArray);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // console.log(`입력받은 숫자 : ${input}`);
      this.userNumberInput = input;
      this.checkInvalidInput();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
