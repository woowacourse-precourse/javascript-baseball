const { Console } = require("@woowacourse/mission-utils");

function input(comment) {
  return new Promise((resolve) => {
    Console.readLine(comment, (answer) => resolve(answer));
  });
}

module.exports = input;
