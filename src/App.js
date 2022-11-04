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

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.input();
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력하세요 : ', (InputNumber) => {
      this.UserInputNumber = InputNumber;
    });
    MissionUtils.Console.print(this.UserInputNumber);
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
}

const app = new App();
app.play();
module.exports = App;
