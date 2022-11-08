const { GAME_MESSAGE, ERROR_MESSAGE } = require("../constants/constants");

class ValidUserNumbers {
  isValidUserInput(userInput) {
    const isNumberElement = (element) => element >= "1" && element <= "9";
    const userNumbers = [];
    userInput.split("").forEach((element) => {
      !userNumbers.includes(element)
        ? userNumbers.push(element)
        : userNumbers.push("NO");
    });

    return userNumbers.length === 3 && userNumbers.every(isNumberElement);
  }

  isValidRestart(restartNumber) {
    restartNumber !== 1 && restartNumber !== 2
      ? this.throwError(ERROR_MESSAGE.ERROR_RESTART_MESSAGE)
      : restartNumber;
    return restartNumber;
  }

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = ValidUserNumbers;
