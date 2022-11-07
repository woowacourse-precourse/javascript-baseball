import Random from '../utils/Random.js';

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
      answer = this.addUniqueNumberToAnswerArray(answer, number);
    }

    return answer;
  }

  checkLessThanThreeLength(answer) {
    return answer.length < this.checker.length;
  }

  addUniqueNumberToAnswerArray(answer, number) {
    return answer.includes(number) ? answer : this.addNumberToAnswerArray(answer, number);
  }

  addNumberToAnswerArray(answer, number) {
    return [...answer, number];
  }
}

export default Computer;
