class CalculateGame {
  constructor(computerNumber, userInputNumber) {
    this.computerNumber = computerNumber.split('');
    this.userInputNumber = userInputNumber.split('');
    this.strike = 0;
    this.ball = 0;
  }

  countStrike() {
    this.userInputNumber.forEach((number, index) => {
      if (number === this.computerNumber[index]) {
        this.strike += 1;
      }
    });
  }

  countBall() {
    this.userInputNumber.forEach((number, index) => {
      if (number !== this.computerNumber[index] && this.computerNumber.includes(number)) {
        this.ball += 1;
      }
    });
  }
}

module.exports = CalculateGame;
