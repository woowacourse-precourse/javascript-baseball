const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");

const Computer = require("./libs/Computer");
const User = require("./libs/User");
const Validator = require("./libs/Validator");

const initialState = {
  answer: "",
  inputValue: "",
};

class App {
  constructor() {
    this.state = initialState;

    this.computer = new Computer();
    this.user = new User();
    this.validator = new Validator();
  }

  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    this.state.answer = this.computer.getThreeUniqueNumbers();
    this.input();
  }

  input() {
    this.state.inputValue = this.user.getInputValue();

    const isInputValueValid = this.validator.checkInputValueValid(
      this.state.inputValue
    );
    if (isInputValueValid === false) this.error();
  }

  error() {
    throw new Error(MESSAGE.ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
