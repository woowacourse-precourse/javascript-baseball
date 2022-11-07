const ZERO = 0;

class Message {
  message = '';

  getMessage() {
    return this.message;
  }

  isNothing(ball, strike) {
    if (ball === ZERO && strike === ZERO) {
      this.message = '낫싱';
    }

    return this;
  }

  isOnlyBall(ball, strike) {
    if (ball !== ZERO && strike === ZERO) {
      this.message = `${ball}볼`;
    }

    return this;
  }

  isOnlyStrike(ball, strike) {
    if (ball === ZERO && strike !== ZERO) {
      this.message = `${strike}스트라이크`;
    }

    return this;
  }

  isBallAndStrike(ball, strike) {
    if (ball !== ZERO && strike !== ZERO) {
      this.message = `${ball}볼 ${strike}스트라이크`;
    }

    return this;
  }
}

export default Message;
