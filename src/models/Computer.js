import Convertor from '../utils/Convertor.js';
import Random from '../utils/Random.js';
import Validator from './Validator.js';

class Computer {
  checker = {
    length: 3,
    min: 1,
    max: 9,
  };

  getAnswer() {
    return this.answer;
  }

  setAnswer() {
    this.answer = this.createAnswer();
  }

  createAnswer() {
    let answer = [];

    while (this.checkLessThanThreeLength(answer)) {
      const number = Random.pickNumberInRange(this.checker.min, this.checker.max);
      answer = this.getUniqueNumberToAnswerArray(answer, number);
    }

    return answer;
  }

  checkLessThanThreeLength(answer) {
    return answer.length < this.checker.length;
  }

  getUniqueNumberToAnswerArray(answer, number) {
    return answer.includes(number) ? [...answer] : [...answer, number];
  }

  checkAnswer() {
    const answer = Convertor.stringToNumber(Convertor.numberArrayToString(this.answer));

    return (
      Validator.checkTruthy(answer) &&
      Validator.checkNumberType(answer) &&
      Validator.checkRange(answer) &&
      Validator.checkDuplication(this.answer) &&
      this.answer.every(number => Validator.checkNumberType(number))
    );
  }
}

export default Computer;
