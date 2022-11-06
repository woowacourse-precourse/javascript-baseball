const inputValidation = {
  checkThreeNum(userInput) {
    // if (userInput.length == 3) {
    //   return true;
    // } else {
    //   false;
    // }
    return userInput.length == 3 ? true : false;
  },

  checkNoOverlap(userInput) {},

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
