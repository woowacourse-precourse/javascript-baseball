class Input {
  static toNumbers(input) {
    return input.split('').map((char) => Number(char));
  }
}

module.exports = Input;
