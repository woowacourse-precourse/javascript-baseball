const { NUMBER } = require("./Game");

class User {
  validateInput(userInput) {
    console.log(
      this.checkType(userInput),
      this.checkUnique(userInput),
      this.checkLength(userInput),
      this.checkRange(userInput)
    );
    return (
      this.checkType(userInput) &&
      this.checkUnique(userInput) &&
      this.checkLength(userInput) &&
      this.checkRange(userInput)
    );
  }

  checkType(userInput) {
    let flag = true;
    userInput.forEach((number) => {
      if (isNaN(number)) flag = false;
    });
    if (flag === false) return false;
    return true;
  }

  checkUnique(userInput) {
    const uniqueSet = new Set(userInput);
    if (userInput.length !== uniqueSet.size) return false;
    return true;
  }

  checkLength(userInput) {
    if (userInput.length !== NUMBER.LENGTH) return false;
    return true;
  }

  checkRange(userInput) {
    let flag = true;
    userInput.forEach((number) => {
      if (number <= 0) flag = false;
    });

    if (flag === false) return false;
    return true;
  }

  makeUserNumber(userInput) {
    const changeStrToNum = (str) => Number(str);
    const userNumber = Array.from(userInput, changeStrToNum);

    return userNumber;
  }
}

module.exports = User;
