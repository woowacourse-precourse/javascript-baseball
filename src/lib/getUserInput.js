const { Console } = require("@woowacourse/mission-utils");

const getUserInputs = (notification) => {
  let userInput;
  Console.readLine(notification, (input) => {
    userInput = input;
    Console.close();
  });
  return userInput;
};

module.exports = getUserInputs;
