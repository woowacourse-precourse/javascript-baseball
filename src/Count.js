class Count {
  constructor() {}

  static ball(computerNumbers, userNumbers) {
    const balls = computerNumbers.filter((number, index) => (
      number !== userNumbers[index] && userNumbers.includes(number)
    ));
    return balls.length;
  }
}

module.exports = Count;
