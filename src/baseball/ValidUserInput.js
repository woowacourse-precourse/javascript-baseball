const { GAME_MESSAGE, WHAT, ERROR_MESSAGE } = require("../constants/constants");

class ValidUserNumbers {
  static isValidUserInput(userInput) {
    const isNumberElement = (element) => element >= "1" && element <= "9";
    const userNumbers = [];
    userInput.split("").forEach((element) => {
      !userNumbers.includes(element)
        ? userNumbers.push(element)
        : userNumbers.push("NO");
    });

    return userNumbers.length === 3 && userNumbers.every(isNumberElement);
  }

  static isValidRestart(restartNumber) {
    if (restartNumber !== 1 && restartNumber !== 2)
      throw new Error(ERROR_MESSAGE.ERROR_RESTART_MESSAGE);
  }
}

module.exports = ValidUserNumbers;
