const _ = {
  quotientRemainder(number, divideNumber) {
    return [Math.trunc(number / divideNumber), number % divideNumber];
  },

  divideNumberToArray(number) {
    const result = [];

    while (true) {
      const [quotient, Remainder] = this.quotientRemainder(number, 10);
      result.push(Remainder);

      if (quotient === 0) {
        return [...result].reverse();
      }

      number = quotient;
    }
  },
};

module.exports = _;
