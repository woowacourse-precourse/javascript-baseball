class Game {
  #init() {
    this.ball = 0;
    this.strike = 0;
  }

  calculate(userInput = [], computerInput = []) {
    this.#init();

    const { length } = userInput;

    if (!length) {
      throw new Error('입력값이 없으면 안됩니다.');
    }

    if (length === 1 || length === 2 || length > 3) {
      throw new RangeError('입력의 길이는 1 이상 3 이하의 길이만 가능합니다.');
    }

    userInput.forEach((userInputNumber, currentIndex) => {
      const strike = userInputNumber === computerInput[currentIndex];

      if (strike) {
        this.strike += 1;
      }

      if (!strike && computerInput.includes(userInputNumber)) {
        this.ball += 1;
      }
    });

    return [this.ball, this.strike];
  }
}

module.exports = Game;
