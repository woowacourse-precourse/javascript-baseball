const MissionUtils = require('@woowacourse/mission-utils');
const Random = require('./Random');
/*
const IsInputIsValid = require('./IsValidInput');
*/
const StartPrint = require('./StartPrint');

class App {
  constructor() {
    this.Number = Random;
    this.strike = 0;
    this.ball = 0;
    this.RANGE = 3;
  }
  UserInputNumber = '';

  Init() {
    this.ball = 0;
    this.strike = 0;
    this.UserInputNumber = '';
  }

  play() {
    StartPrint;
    this.Number = Random;
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력하세요 : ', (InputNumber) => {
      this.UserInputNumber = InputNumber;
    });
  }
  CheckInputIsValid() {
    const CheckSet = new Set();
    const UserInputArray = [...this.UserInputNumber];
    UserInputArray.forEach((EachChar) => {
      CheckSet.add(EachChar);
    });
    if (CheckSet.size !== 3) {
      return false;
    }
    return true;
  }

  StrikeBall() {
    for (let i = 0; i < this.RANGE; i++) {
      if (this.Number[i] === this.UserInputNumber[i]) {
        this.strike += 1;
      } else if (
        this.Number[i] !== this.UserInputNumber[i] &&
        this.Number.includes(this.UserInputNumber[i])
      ) {
        this.ball += 1;
      }
    }
  }

  PrintStrikeBall() {
    if (this.strike === 0 && this.ball > 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else if (this.strike > 0 && this.ball === 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else {
      MissionUtils.Console.print(`${this.strike}스트라이크 ${this.ball}볼`);
    }
  }
}

const app = new App();
app.play();
module.exports = App;
