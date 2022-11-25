const Controller = {
  async stringToNumber(numbers){
    let newNumbers = numbers.split('')
    return await newNumbers.map(newNumber => Number(newNumber))
  },

  validate(numbers) {
    const redundantNumbers = new Set(numbers);
    for (number of numbers) {
      if (isNaN(Number(number))) {
        throw new Error();
      }
      if (redundantNumbers.size !== 3) {
        throw new Error();
      }
      if (1 > Number(number) || Number(number) > 9) {
        throw new Error();
      }
    }
    return numbers;
  },
};

module.exports = Controller;
