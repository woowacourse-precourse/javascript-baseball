class Input {
  static toNumbers(input) {
    return input.split('').map((char) => Number(char));
  }

  static isLengthThree(numbers) {
    return numbers.length === 3;
  }

  static isBetweenOneAndNine(numbers) {
    return numbers.every((number) => number >= 1 && number <= 9);
  }

  static hasDuplicates(numbers) {
    const set = new Set(numbers);
    return numbers.length !== set.size;
  }
}

module.exports = Input;
