const MissionUtils = require('@woowacourse/mission-utils');
const message = require('./MESSAGE');

class App {
  constructor() {
    this.strike = 0;
    this.ball = 0;
    this.RANGE = 3;
    this.UserInputNumber = 'InitINPUT';
  }

  Init() {
    this.ball = 0;
    this.strike = 0;
  }

  input() {
    MissionUtils.Console.readLine('숫자를입력하세요', (InputNumber) => {
      MissionUtils.Console.print(InputNumber);
      this.UserInputNumber = InputNumber;
    });
    this.ball = 0;
    this.strike = 0;
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

  IfStrike() {
    this.input();
    if (this.UserInputNumber === '1') {
      this.play();
    } else {
      MissionUtils.Console.print(message.END);
      MissionUtils.Console.close();
    }
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
    for (let i = 0; i < this.RANGE; i += 1) {
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
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
  }

  play() {
    this.Number = this.CreateRandom().join('');
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다!');
    while (true) {
      this.Init();
      this.input();

      if (this.CheckInputIsValid(this.UserInputNumber) === false) {
        break;
      }
      this.StrikeBall();
      this.PrintStrikeBall();
      if (this.strike === 3) {
        MissionUtils.Console.print(message.SUCCESS);
        break;
      }
    }
    if (this.strike === 3) {
      this.IfStrike();
    } else if (this.UserInputNumber !== 'InitINPUT') {
      throw message.INPUTERROR;
    }
  }
}

const app = new App();
app.play();
module.exports = App;
