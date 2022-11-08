/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
const MissionUtils = require('@woowacourse/mission-utils');

const intersection = (setA, setB) =>
  new Set([...setA].filter((element) => setB.has(element)));

class App {
  constructor() {
    this.computerNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
    this.computerNumberSet = new Set(this.computerNumberArray);
    this.userNumberInput = '';
    this.userNumberArray = [];
    this.userNumberSet = new Set();
    this.resultObject = { ball: 0, strike: 0 };
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

  countBall() {
    return (
      intersection(this.userNumberSet, this.computerNumberSet).size -
      this.resultObject.strike
    );
  }

  countStrike() {
    return this.userNumberArray.filter(
      (userNumber, index) => userNumber === this.computerNumberArray[index],
    ).length;
  }

  getResultString() {
    let resultString = '';
    if (this.resultObject.ball !== 0) {
      resultString += `${this.resultObject.ball}볼`;
    }
    if (this.resultObject.strike !== 0) {
      resultString += `${this.resultObject.strike}스트라이크`;
    }
    if (this.resultObject.ball === 0 && this.resultObject.strike === 0) {
      resultString = '낫싱';
    }
    return resultString;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      console.log(`입력받은 숫자 : ${input}`);
      this.userNumberInput = input;
      // this.resultObject.ball += 1;
      // console.log(`ball ${this.resultObject.ball}`);
      this.checkInvalidInput();
    });
    console.log(`컴퓨터 숫자 : ${this.computerNumberArray.join('')}`);
    this.resultObject.strike = this.countStrike();
    this.resultObject.ball = this.countBall();
    console.log(`ball ${this.resultObject.ball}`);
    console.log(`strike ${this.resultObject.strike}`);
    MissionUtils.Console.print(this.getResultString());
  }
}

const app = new App();
app.play();

module.exports = App;
