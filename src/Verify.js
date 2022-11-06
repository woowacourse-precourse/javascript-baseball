class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {}

class Verify {
  userInput(input) {
    const inputSet = new Set(input);

    if (
      inputSet.size !== input.length
      || inputSet.size > 3
      || inputSet.has(NaN)
      || inputSet.has(0)
    ) {
      throw new InputError('잘못된 값을 입력하셨습니다.');
    }
  }

  state(state) {
    if (state !== 1 && state !== 2) {
      throw new InputError('잘못된 값을 입력하셨습니다.');
    }
  }
}

module.exports = Verify;
