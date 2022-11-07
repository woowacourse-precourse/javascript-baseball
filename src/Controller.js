const { ANSWER_LENGTH, NO_MESSAGE } = require("./constants");

class Controller {
  isValidInput(input) {
    return this.isRightLength(input) &&
      this.hasDuplicateNumbers(input) &&
      this.hasNaN &&
      this.isOnlyNumbers(input);
  }

  isRightLength(input) {
    return input.length === ANSWER_LENGTH;
  }

  hasDuplicateNumbers(input) {
    return input.filter(function (number, index) {
      return input.indexOf(number) === index;
    }).length === ANSWER_LENGTH;
  }

  hasNaN(input) {
    return input.every(function(number) {
      return isNaN(number) === false;
    })
  }

  isOnlyNumbers(input) {
    return input.every(function(number) {
      return number >= 1 && number <= 9;
    });
  }

  compareAnswer(input, answer) {
    const strikes = this.getStrikes(input, answer);
    const balls = this.getBalls(input, answer);

    const hint = strikes === 0 && balls === 0
      ? '낫싱' : this.makeHint(strikes, balls);
    return [hint, this.isFinish(strikes)];
  }

  getStrikes(input, answer) {
    let count = 0;
    input.forEach(function (value, index) {
      if (answer[index] === value) count++;
    });
    return count;
  }

  getBalls(input, answer) {
    let count = 0;
    input.forEach(function (value, index) {
      if (answer[index] !== value && answer.includes(value)) count++;
    });
    return count;
  }

  isFinish(strikes) {
    return strikes === ANSWER_LENGTH;
  }

  makeHint(strikes, balls) {
    const ballHint = balls > 0 ? `${balls}볼 ` : NO_MESSAGE;
    const strikeHint = strikes > 0 ? `${strikes}스트라이크` : NO_MESSAGE;
    return (ballHint + strikeHint).trim();
  }
}

module.exports = Controller;