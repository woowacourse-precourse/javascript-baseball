const { Console } = require("@woowacourse/mission-utils");

const Computer = require("./Computer");
const User = require("./User");

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
    Console.print("숫자 야구 게임을 시작합니다.");
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
