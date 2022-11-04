class Checker {
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
    return this.answer >= 123 && this.answer <= 987;
  }

  checkDuplication() {
    return this.answerArr.every((num, i, answerArr) => answerArr.indexOf(num) === i);
  }

  checkUserInput() {
    return this.checkTruthy() && this.checkType() && this.checkRange() && this.checkDuplication();
  }
}

export default Checker;
