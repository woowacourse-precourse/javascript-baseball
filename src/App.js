const MissionUtils = require('@woowacourse/mission-utils');
const message = require('./MESSAGE');
const UserInput = require('./UserInput');
const StrikeBall = require('./StrikeBall');

class App {
  constructor() {
    this.MAXRANGE = 3;
    this.close = () => {
      MissionUtils.Console.print(message.END);
      MissionUtils.Console.close();
    };

    this.StrikeBallCycle = (
      StrikeBallObj,
      UserInputValue,
      RandomNumberValue
    ) => {
      StrikeBallObj.InitStrikeBall();
      StrikeBallObj.GetStrikeBall(UserInputValue, RandomNumberValue);
      StrikeBallObj.PrintStrikeBall();
    };
  }

  CreateRandom() {
    const RandomArr = [];
    while (RandomArr.length < this.MAXRANGE) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandomArr.includes(number)) {
        RandomArr.push(number);
      }
    }
    return RandomArr;
  }

  play() {
    this.Number = this.CreateRandom().join('');
    let strikeball = new StrikeBall();
    const userinput = new UserInput();
    userinput.GetInput();
    while (true) {
      if (userinput.CheckInputIsValid(userinput.UserInputNumber) === false) {
        break;
      }
      strikeball = new StrikeBall();
      this.StrikeBallCycle(strikeball, userinput.UserInputNumber, this.Number);
      if (strikeball.Strike === message.THREESTRIKE) {
        MissionUtils.Console.print(message.SUCCESS);
        break;
      }
      userinput.GetInput();
    }
    if (strikeball.Strike === message.THREESTRIKE) {
      if (strikeball.IfStrike()) {
        this.play();
      } else {
        this.close();
      }
    } else if (userinput.UserInputNumber !== message.INITINPUT) {
      throw message.INPUTERROR;
    }
  }
}

MissionUtils.Console.print(message.START);
const app = new App();
app.play();
module.exports = App;
