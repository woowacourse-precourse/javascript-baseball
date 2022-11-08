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

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNums();
    this.startGame();
  }

  async startGame() {
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
    // this.randomNums = [1, 2, 3];
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
    this.countBallAndStrike();
    this.printResult();
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
    this.addResultScore(result);
  }

  addResultScore(result) {
    if (result == BALL) this.gameResult.ball++;
    if (result == STRIKE) this.gameResult.strike++;
  }

  printResult() {
    const count = this.gameResult;
    let result = '';
    if (this.gameResult.strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      result = '3개의 숫자를 모두 맞히셨습니다! 게임종료';
    } else if (count.ball === 0 && count.strike === 0) {
      result = '낫싱';
    } else {
      result = App.caseOfBall(count.ball);
      result += App.caseofStrike(count.strike);
    }
    MissionUtils.Console.print(result);
  }

  static caseOfBall(ball) {
    if (ball !== NOTHING) return String(`${ball}볼 `);
    return '';
  }

  static caseofStrike(strike) {
    if (strike !== NOTHING) return String(`${strike}스트라이크 `);
    return '';
  }
}

const app = new App();
app.play();
// module.exports = App;
