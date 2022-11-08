const Convertor = require('../utils/Convertor');
const Validator = require('./Validator');

class User {
  getAnswerArray() {
    return this.answerArray;
  }

  getAnswerString() {
    return this.answerString;
  }

  setAnswerString(answerString) {
    this.answerString = answerString;
  }

  checkAnswer() {
    this.createNumberAndNumberArrayData();

    return (
      Validator.checkTruthy(this.answerString) &&
      Validator.checkStringType(this.answerString) &&
      Validator.checkTruthy(this.answer) &&
      Validator.checkNumberType(this.answer) &&
      Validator.checkRange(this.answer) &&
      Validator.checkDuplication(this.answerArray)
    );
  }

  createNumberAndNumberArrayData() {
    this.answer = Convertor.stringToNumber(this.answerString);
    this.answerArray = Convertor.stringToNumberArray(this.answerString);
  }
}

module.exports = User;
