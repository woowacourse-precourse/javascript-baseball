const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, SELECT } = require("./constants/index");

const Computer = require("./libs/Computer");
const Validator = require("./libs/Validator");

const initialState = {
  answer: "",
  inputValue: "",
};

class App {
  constructor() {
    this.state = initialState;

    this.computer = new Computer();
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
    Console.readLine(MESSAGE.INPUT, (inputValue) => {
      const isInputValueValid = this.validator.checkInputValueValid(inputValue);

      if (isInputValueValid === false) {
        return this.error();
      }

      this.state.inputValue = inputValue;

      this.match();
    });
  }

  match() {
    const hint = this.computer.getHint(
      this.state.inputValue,
      this.state.answer
    );

    Console.print(hint);

    if (this.state.inputValue === this.state.answer) {
      return this.success();
    }

    this.input();
  }

  success() {
    Console.print(MESSAGE.SUCCESS);

    Console.readLine(MESSAGE.SELECT, (inputValue) => {
      if (inputValue === SELECT.RESTART) {
        return this.restart();
      }

      if (inputValue === SELECT.EXIT) {
        return this.exit();
      }

      return this.error();
    });
  }

  restart() {
    this.state = initialState;

    this.start();
  }

  exit() {
    Console.close();
  }

  error() {
    throw new Error(MESSAGE.ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
