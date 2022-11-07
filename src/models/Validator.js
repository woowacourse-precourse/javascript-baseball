class Validator {
  static checker = {
    min: 123,
    max: 987,
  };

  static checkTruthy(userAnswer) {
    return Boolean(userAnswer);
  }

  static checkType(userAnswer) {
    return typeof userAnswer === 'number';
  }

  static checkRange(userAnswer) {
    return userAnswer >= this.checker.min && userAnswer <= this.checker.max;
  }

  static checkDuplication(userAnswerArray) {
    return userAnswerArray.every((num, i, array) => array.indexOf(num) === i);
  }
}

export default Validator;
