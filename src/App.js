const MissionUtils = require('@woowacourse/mission-utils');
const Random = require('./Random');
const IsInputIsValid = require('./IsValidInput');

class App {
  constructor() {
    this.Number = Random;
    this.strike = 0;
    this.ball = 0;
  }
  UserInputNumber = '';

  Init() {
    this.ball = 0;
    this.strike = 0;
    this.UserInputNumber = '';
  }

  play() {
    this.input();
    this.CheckInputIsValid();
    this.CheckHasStrike();
    this.CheckHasBall();
    this.Init();
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력하세요 : ', (InputNumber) => {
      this.UserInputNumber = InputNumber;
    });
    MissionUtils.Console.close();
  }
  CheckInputIsValid() {
    /*
    Compare Number and UserInputNumber
    */
    /*
    if UserInputNumber`s length is not equal three
    */
    const CheckSet = new Set();
    const UserInputArray = [...this.UserInputNumber];
    UserInputArray.forEach((EachChar) => {
      CheckSet.add(EachChar);
    });
    if (CheckSet.size !== 3) {
      throw new Error('Input must be 3 different charater');
    }
    return true;
  }

  CheckHasStrike() {
    /*
    인덱스가 같을떄 동일한 단어인 경우 스트라이크
    */
    for (let i = 0; i < this.Number.length; i++) {
      if (this.Number[i] === this.UserInputNumber[i]) {
        this.strike += 1;
      }
      return this.strike;
    }
  }

  CheckHasBall() {
    /*
    인덱스가 다르면서 랜덤한 숫자가 입력한 값을 포함한다면
    */
    for (let i = 0; i < this.Number.length; i++) {
      if (
        this.Number[i] !== this.UserInputNumber[i] &&
        this.Number.includes(this.Number[i])
      ) {
        this.ball += 1;
      }
      return this.ball;
    }
  }
}

const app = new App();
app.play();
module.exports = App;
