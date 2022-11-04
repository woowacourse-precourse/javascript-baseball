class Checker {
  checker = {
    min: 123,
    max: 987,
  };

  setter([answer, answerArr]) {
    this.answer = answer;
    this.answerArr = answerArr;
  }

  checkTruthy() {
    return Boolean(this.answer);
  }

  checkType() {
    return typeof this.answer === 'number';
  }

  checkRange() {
    return this.answer >= this.checker.min && this.answer <= this.checker.max;
  }

  checkDuplication() {
    return this.answerArr.every((num, i, answerArr) => answerArr.indexOf(num) === i);
  }

  checkUserInput() {
    return this.checkTruthy() && this.checkType() && this.checkRange() && this.checkDuplication();
  }
}

export default Checker;
