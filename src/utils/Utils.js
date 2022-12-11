const { Console } = require('@woowacourse/mission-utils');

const Utils = {
  print(message) {
    Console.print(message);
  },

  close() {
    Console.close();
  },

  readLine(query, callback) {
    Console.readLine(query, callback);
  },
};

module.exports = Utils;
