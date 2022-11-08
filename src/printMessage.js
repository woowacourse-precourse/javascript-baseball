const Message = require('./Message');
const { Console } = require('@woowacourse/mission-utils');

class printMessage {
  constructor() {
    this.message = Message.start;
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  print() {
    console.log(this.message);
    return this;
  }
}

function printStart() {
  const start = new printMessage();
  start.print();
}

function printCorrect() {
  const correct = new printMessage().setMessage(Message.correct);
  correct.print();
}

function printIsRestart() {
  const restart = new printMessage().setMessage(Message.restart);
  restart.print();
}

class printConsoleMessage extends printMessage {
  print() {
    Console.print(this.message);
    return this;
  }
}

function printGameover() {
  const gameover = new printConsoleMessage().setMessage(Message.gameover);
  gameover.print();
}

function printResult(resultStr) {
  const result = new printConsoleMessage().setMessage(resultStr);
  result.print();
}

module.exports = {
  printStart,
  printCorrect,
  printIsRestart,
  printGameover,
  printResult,
};
