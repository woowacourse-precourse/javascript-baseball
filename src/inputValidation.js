const inputValidation = {
  checkThreeNum(userInput) {
    return userInput.length == 3 ? true : false;
  },

  checkNoOverlap(userInput) {
    const userInputSet = new Set(userInput);
    return userInput.length !== userInputSet.length ? false : true;
  },

  checkOnlyNum(userInput) {
    const userInputArr = [...userInput];
    userInputArr.forEach((item) => {
      return item == this.rotateOnetoNine(item) ? true : false;
    });
  },

  rotateOnetoNine(str) {
    for (let num = 1; num < 10; num++) {
      return num;
    }
  },
};

module.exports = inputValidation;
