class Validator {
  constructor(userInputArr) {
    this.userInputArr = userInputArr;
    this.userInputLen = this.userInputArr.length;
  }
  isValidInput() {
    return (
      this.isThreeCiphers() && this.isDigitWithinRange() && this.isUnique()
    );
  }
  isThreeCiphers() {
    return this.userInputLen === 3;
  }
  isDigitWithinRange() {
    return !this.userInputArr
      .map((elem) => /[1-9]/g.test(elem))
      .includes(Boolean(false));
  }
  isUnique() {
    return new Set(this.userInputArr).size === this.userInputLen;
  }
}

module.exports = Validator;
