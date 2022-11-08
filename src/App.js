const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./assets/Message");
const Computer = require("./components/Computer");
const Game = require("./components/Game");

class App {
  constructor() {
    this.computer = new Computer();
    this.game = new Game();
    this.answer = null;
  }

  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    this.answer = this.computer.makeAnswer();
    this.enter();
  }

  enter() {
    Console.readLine(MESSAGE.ENTER, (input) => this.judge(input));
  }

  judge(input) {
    const isValidInput = this.game.validateInput(input);
    if (!isValidInput) return this.error();

    const { ballCnt, strikeCnt } = this.game.judgeAnswer(input, this.answer);
  }

  error() {
    throw new Error(MESSAGE.ERROR);
  }
}

module.exports = App;
