import Convertor from '../utils/Convertor.js';
import Validator from './Validator.js';

const MESSAGE = '잘못된 입력입니다.';

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

  createNumberAndNumberArrayData() {
    this.answer = Convertor.stringToNumber(this.answerString);
    this.answerArray = Convertor.stringToNumberArray(this.answerString);
  }

  checkAnswer() {
    this.createNumberAndNumberArrayData();

    if (
      !Validator.checkTruthy(this.answer) ||
      !Validator.checkType(this.answer) ||
      !Validator.checkRange(this.answer) ||
      !Validator.checkDuplication(this.answerArray)
    ) {
      throw new Error(MESSAGE);
    }
  }
}

export default User;
