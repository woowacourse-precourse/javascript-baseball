const Mission = require('./Mission');

class Compare extends Mission {
  constructor(computerNumbers, userNumbers) {
    super();
    this.computerNumbers = String(computerNumbers).split(',');
    this.userNumbers = String(userNumbers).split(',');
  }

  getStrikeCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (value === this.userNumbers[index]) return acc + 1;
      return acc;
    }, 0);
  }

  getBallCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (this.userNumbers.includes(value) && value !== this.userNumbers[index])
        return acc + 1;
      return acc;
    }, 0);
  }
}

module.exports = Compare;
