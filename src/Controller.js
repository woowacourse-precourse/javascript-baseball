const { ANSWER_LENGTH } = require("./constants");

class Controller {
  isValidInput(input) {
    return this.isRightLength(input) && this.hasDuplicateNumbers(input);
  }

  isRightLength(input) {
    return input.length === ANSWER_LENGTH;
  }

  hasDuplicateNumbers(input) {
    return input.filter(function (number, index) {
      return input.indexOf(number) === index;
    }).length === ANSWER_LENGTH;
  }

  compareAnswer(input, answer) {
    const strikes = this.getStrikes(input, answer);
    const balls = this.getBalls(input, answer);

    if (this.isFinish(strikes) === true) {
      return '';
    }

    const hint = strikes === 0 && balls === 0
      ? this.makeHint(strikes, balls) : '낫싱';
    return hint;
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
    const strikeHint = strikes > 0 ? `${strikes}스트라이크 ` : '';
    const ballHint = balls > 0 ? `${balls}볼` : '';
    return (strikeHint + ballHint).trim();
  }
}

module.exports = Controller;