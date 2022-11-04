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

  getResult() {
    this.countStrike();
    this.countBall();

    if (this.strike !== 0 && this.ball !== 0) {
      return `${this.ball}볼 ${this.strike}스트라이크`;
    } else if (this.strike !== 0 && this.ball === 0) {
      return `${this.strike}스트라이크`;
    } else if (this.strike === 0 && this.ball !== 0) {
      return `${this.ball}볼`;
    } 

    return '낫싱';
  }
}

module.exports = CalculateGame;
