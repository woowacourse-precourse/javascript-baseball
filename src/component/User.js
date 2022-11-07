const { NUMBER_COUNT } = require("../constant/message.constant");

class User {
  checkInput(userInput) {
    return (
      this.checkInputLength(userInput) &&
      this.checkInputExist(userInput) &&
      this.checkInputNum(userInput) &&
      this.checkInputZero(userInput)
    );
  }

  checkInputLength(userInput) {
    return userInput.length === NUMBER_COUNT;
  }

  checkInputExist(userInput) {
    const isExist = new Set([...userInput]).size !== NUMBER_COUNT;
    return isExist === false;
  }

  checkInputNum(userInput) {
    const setInputToNum = Number(userInput);
    const isNumber = (num) => !Number.isNaN(num) && typeof num === "number";

    return isNumber(setInputToNum);
  }

  checkInputZero(userInput) {
    const isZeroExist = [...userInput].includes("0");
    return isZeroExist === false;
  }
}

module.exports = User;
