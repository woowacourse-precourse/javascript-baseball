const Message = require("./Message");
const { Console } = require("@woowacourse/mission-utils");

class printMessage {
  constructor() {
    this.message = Message.start;
  }

  setMessage(message) {
    this.message = message;
  }

  print() {
    Console.print(this.message);
  }
}

function printStart() {
  const start = new printMessage();
  start.print();
}

module.exports = { printStart };
