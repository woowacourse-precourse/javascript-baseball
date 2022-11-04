const { Console } = require("@woowacourse/mission-utils");

function input(comment) {
  return new Promise((resolve) => {
    Console.readLine(comment, resolve);
  });
}

module.exports = input;
