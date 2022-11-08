class Calculator {
  calcScore(input, randomNumber) {
    const ball = this.countBall(input, randomNumber);
    const strike = this.countStrike(input, randomNumber);

    return { ball, strike };
  }

  countBall(input, randomNumber) {
    let ball = 0;

    [...input].forEach((num, idx) => {
      if (this.isBall(num, idx, randomNumber)) ball++;
    });

    return ball;
  }

  isBall(num, idx, randomNumber) {
    return randomNumber.includes(num) && idx !== [...randomNumber].indexOf(num);
  }

  countStrike(input, randomNumber) {
    let strike = 0;

    [...input].forEach((num, idx) => {
      if (this.isStrike(num, idx, randomNumber)) strike++;
    });

    return strike;
  }

  isStrike(num, idx, randomNumber) {
    return randomNumber.includes(num) && idx === [...randomNumber].indexOf(num);
  }
}

module.exports = Calculator;
