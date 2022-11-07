const { NUMBER } = require("./Game");
const Game = require("./Game");

class User {
  validateInput(userInput) {
    return (
      this.checkType(userInput) &&
      this.checkUnique(userInput) &&
      this.checkLength(userInput) &&
      this.checkRange(userInput)
    );
  }

  checkType(userInput) {
    userInput.forEach((number) => {
      if (isNaN(number)) return false;
    });
  }

  checkUnique(userInput) {
    const unique = new Set(userInput);
    if (userInput.length !== unique.length) return false;
  }

  checkLength(userInput) {
    if (userInput.length !== Game.NUMBER.LENGTH) return false;
  }

  checkRange(userInput) {
    userInput.forEach((number) => {
      if (!number > 0) return false;
    });
  }

  makeUserNumber(userInput) {
    const changeStrToNum = (str) => Number(str);
    const userNumber = Array.from(userInput, changeStrToNum);

    return userNumber;
  }
}

module.exports = User;
