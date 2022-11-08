const { Console } = require('@woowacourse/mission-utils');

const myConsole = {
  print(message) {
    Console.print(message);
  },
  readLine(message, callback) {
    Console.readLine(message, (answer) => {
      callback(answer);
    });
  },
  close() {
    Console.close();
  },
};

module.exports = myConsole;
