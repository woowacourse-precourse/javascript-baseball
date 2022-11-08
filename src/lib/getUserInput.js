const { Console } = require("@woowacourse/mission-utils");

const getUserInputs = async (notification) => {
  return new Promise((resolve) => {
    Console.readLine(notification, (input) => {
      resolve(input);
    });
  });
};

module.exports = getUserInputs;
