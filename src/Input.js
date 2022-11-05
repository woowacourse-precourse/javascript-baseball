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
    const numberSet = new Set(numbers);
    return numbers.length !== numberSet.size;
  }

  static isValid(numbers) {
    return (
      Input.isLengthThree(numbers)
      && Input.isBetweenOneAndNine(numbers)
      && !Input.hasDuplicates(numbers)
    );
  }
}

module.exports = Input;
