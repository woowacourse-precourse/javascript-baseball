const MissionUtils = require('@woowacourse/mission-utils');
const message = require('./MESSAGE');

class UserInput {
  constructor() {
    this.MAXRANGE = 3;
    this.UserInputNumber = message.INITINPUT;
  }

  GetInput() {
    MissionUtils.Console.readLine(message.INPUTQA, (Number) => {
      this.UserInputNumber = Number;
    });
  }

  CheckInputIsValid() {
    const CheckSet = new Set();
    const UserInputArray = [...this.UserInputNumber];
    UserInputArray.forEach((EachInputChar) => {
      CheckSet.add(EachInputChar);
    });
    if (CheckSet.size !== this.MAXRANGE) {
      return false;
    }
    return true;
  }
}

module.exports = UserInput;
