class Validator {
  static checker = {
    min: 123,
    max: 987,
  };

  static checkUserAnswer(userAnswer, userAnswerArray) {
    return (
      this.checkTruthy(userAnswer) &&
      this.checkType(userAnswer) &&
      this.checkRange(userAnswer) &&
      this.checkDuplication(userAnswerArray)
    );
  }

  static checkTruthy(userAnswer) {
    return Boolean(userAnswer);
  }

  static checkType(userAnswer) {
    return typeof userAnswer === 'number';
  }

  static checkRange(userAnswer) {
    return userAnswer >= this.checker.min && userAnswer <= this.checker.max;
  }

  static checkDuplication(userAnswer) {
    return userAnswer.every((num, i, array) => array.indexOf(num) === i);
  }
}

export default Validator;
