class Input {
  static toNumbers(input) {
    return input.split('').map((char) => Number(char));
  }

  static isLengthThree(numbers) {
    return numbers.length === 3;
  }
}

module.exports = Input;
