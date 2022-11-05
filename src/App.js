const { Console } = require("@woowacourse/mission-utils");

const Computer = require("./Computer");

const INITIAL_STATE = {
  answer: "",
};

class App {
  constructor() {
    this.state = INITIAL_STATE;

    this.computer = new Computer();
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.state.answer = this.computer.getThreeUniqueNumbers();
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
