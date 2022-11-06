class Calculator {
  calcScore(input, randomNumber) {
    const ball = this.countBall(input, randomNumber);
    const strike = this.countStrike(input, randomNumber);

    if (!ball && !strike) return '낫싱';
    if (strike === 3) {
      this.isCorrect = true;
      return `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
    return `${ball}볼 ${strike}스트라이크`;
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
