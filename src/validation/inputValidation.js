const inputValidation = {
  checkThreeNum(userInput) {
    return userInput.length == 3 ? true : false;
  },

  checkNoOverlap(userInput) {
    const userInputSet = new Set(userInput);
    const userInputSetArr = [...userInputSet];
    return userInput.length == userInputSetArr.length ? true : false;
  },

  checkOnlyNum(userInput) {
    for (let i = 0; i < userInput.length; i++) {
      if (!this.rotateOnetoNine().includes(parseInt(userInput[i]))) {
        return false;
      }
    }
    return true;
  },

  rotateOnetoNine() {
    const rotateOnetoNineArr = [];
    for (let num = 1; num < 10; num++) {
      rotateOnetoNineArr.push(num);
    }
    return rotateOnetoNineArr;
  },
};

module.exports = inputValidation;
