class Count {
  constructor() {}

  static ball(computerNumbers, userNumbers) {
    const balls = computerNumbers.filter((number, index) => (
      number !== userNumbers[index] && userNumbers.includes(number)
    ));
    return balls.length;
  }

  static strike(computerNumbers, userNumbers) {
    const strikes = computerNumbers.filter((number, index) => number === userNumbers[index]);
    return strikes.length;
  }
}

module.exports = Count;
