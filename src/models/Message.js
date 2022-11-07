const ZERO = 0;

class Message {
  message = '';

  getMessage() {
    return this.message;
  }

  isNothing(strike, ball) {
    if (ball === ZERO && strike === ZERO) {
      this.message = '낫싱';
    }

    return this;
  }

  isOnlyBall(strike, ball) {
    if (ball !== ZERO && strike === ZERO) {
      this.message = `${ball}볼`;
    }

    return this;
  }

  isOnlyStrike(strike, ball) {
    if (ball === ZERO && strike !== ZERO) {
      this.message = `${strike}스트라이크`;
    }

    return this;
  }

  isBallAndStrike(strike, ball) {
    if (ball !== ZERO && strike !== ZERO) {
      this.message = `${ball}볼 ${strike}스트라이크`;
    }

    return this;
  }
}

export default Message;
