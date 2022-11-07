const MissionUtils = require('@woowacourse/mission-utils');
const message = require('./MESSAGE');
const StrikeBall = require('./StrikeBall');

class App {
  constructor() {
    this.strike = 0;
    this.ball = 0;
    this.RANGE = 3;
    this.UserInputNumber = 'InitINPUT';
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력하세요', (InputNumber) => {
      MissionUtils.Console.print(InputNumber);
      this.UserInputNumber = InputNumber;
    });
  }

  CreateRandom() {
    const RandomArr = [];
    while (RandomArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandomArr.includes(number)) {
        RandomArr.push(number);
      }
    }
    return RandomArr;
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

  play() {
    this.Number = this.CreateRandom().join('');
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다!');
    let strikeball = new StrikeBall();
    while (true) {
      this.input();
      if (this.CheckInputIsValid(this.UserInputNumber) === false) {
        break;
      }
      strikeball = new StrikeBall();
      strikeball.InitStrikeBall();
      strikeball.GetStrikeBall(this.UserInputNumber, this.Number);
      strikeball.PrintStrikeBall();
      if (strikeball.Strike === 3) {
        MissionUtils.Console.print(message.SUCCESS);
        break;
      }
    }
    if (strikeball.Strike === 3) {
      if (strikeball.IfStrike()) {
        this.play();
      } else {
        MissionUtils.Console.print(message.END);
        MissionUtils.Console.close();
      }
    } else if (this.UserInputNumber !== 'InitINPUT') {
      throw message.INPUTERROR;
    }
  }
}

const app = new App();
app.play();
module.exports = App;
