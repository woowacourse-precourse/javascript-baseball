class Parse {
  static numberToArray(number) {
    return number
      .toString()
      .split("")
      .map((digit) => parseInt(digit));
  }
}

module.exports = Parse;
