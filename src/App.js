const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomNums = [];
    this.inputNums = [];
    this.gameResult = {
      ball: 0,
      strike: 0,
    };
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNums();
    await this.getInputNum();
  }

  makeRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(num)) randomNums.push(num);
    }
    this.randomNums = randomNums;
  }

  getInputNum() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
        this.inputNums = this.parseInput(input);
        resolve();
      });
    });
  }

  parseInput(input) {
    const inputArr = input.split('').map(Number);
    App.checkInputException(inputArr);
    return inputArr;
    // console.log(inputArr);
  }

  static checkInputException(input) {
    input.forEach((num) => {
      if (!App.isInRangeNum(num)) throw 'Error: Check range of input number';
    });
    if (input.length !== 3) throw 'Error: Check input length';
    if (!App.isNotDuplicatedNum(input)) throw 'Error: Check duplicated number';
  }

  static isInRangeNum(num) {
    if (isNaN(num)) return false;
    if (num < 1 || num > 9) return false;
    return true;
  }

  static isNotDuplicatedNum(numsArr) {
    const numsSet = new Set(numsArr);
    if (numsArr.length !== numsSet.size) return false;
    return true;
  }
}

const app = new App();
app.play();
// module.exports = App;
