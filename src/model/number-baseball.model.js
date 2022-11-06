class NumberBaseball {
  inputValidCheck(strNum) {
    if (this.inputLengthCheck(strNum)) {
      return true;
    }
    return false;
  }

  inputLengthCheck(strNum) {
    return strNum.length === 3;
  }
}

module.exports = NumberBaseball;
