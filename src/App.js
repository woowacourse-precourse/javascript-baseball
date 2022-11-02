const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class App {
  inputNumber;
  computer = new Computer();

  play() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNumber = input;
      console.log(this.inputNumber);
    });
  }

  getIsInputValueValid(inputValue) {
    let isInputValueValid = true;
    if (
      getIsLengthInvalid(inputValue) ||
      getIsRepeatExist(inputValue) ||
      getIsInvalidWordExist(inputValue)
    )
      isInputValueValid = false;
    return isInputValueValid;
  }
}

const getIsLengthInvalid = (inputValue) => {
  return inputValue.length !== 3;
};

const getIsRepeatExist = (inputValue) => {
  for (let i = 1; i < inputValue.length; i++) {
    if (inputValue[i - 1] === inputValue[i]) return true;
  }
  return false;
};

const getIsInvalidWordExist = (inputValue) => {
  let inputValueWithoutNumber = inputValue.replace(/[1-9]/g, "");
  return inputValueWithoutNumber.length !== 0;
};

module.exports = App;

const app = new App();
