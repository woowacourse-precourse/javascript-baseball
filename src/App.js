const MissionUtils = require('@woowacourse/mission-utils');

const NOTHING = 0;
const BALL = 1;
const STRIKE = 2;

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
    this.getResult();
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

  getResult() {
    MissionUtils.Console.print(`getresult.random : ${this.randomNums}`);
    // MissionUtils.Console.print(`getresult.input : ${this.inputNums}`);
    this.countBallAndStrike();
  }

  countBallAndStrike() {
    this.inputNums.forEach((inputNum, inputIndex) => {
      this.randomNums.forEach((randomNum, randomIndex) => {
        const compareValue = {};
        compareValue.inputNum = inputNum;
        compareValue.inputIndex = inputIndex;
        compareValue.randomNum = randomNum;
        compareValue.randomIndex = randomIndex;
        this.isBallOrStrike(compareValue);
      });
    });
  }

  isBallOrStrike(value) {
    let result = NOTHING;
    if (value.inputNum === value.randomNum) {
      result = BALL;
      if (value.inputIndex === value.randomIndex) result = STRIKE;
    }
    if (result == BALL) this.gameResult.ball++;
    if (result == STRIKE) this.gameResult.strike++;
  }
}

const app = new App();
app.play();
// module.exports = App;
