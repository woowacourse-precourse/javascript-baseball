const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");

const Computer = require("./libs/Computer");
const User = require("./libs/User");

const initialState = {
  answer: "",
  inputValue: "",
};

class App {
  constructor() {
    this.state = initialState;

    this.computer = new Computer();
    this.user = new User();
  }

  start() {
    Console.print(MESSAGE.START);
    this.state.answer = this.computer.getThreeUniqueNumbers();

    this.state.inputValue = this.user.getInputValue();
    Console.print(this.state.inputValue);
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
