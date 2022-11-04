import MissionUtils from '@woowacourse/mission-utils';

class User {
  getter() {
    return this.answerArr;
  }

  enterAnswer() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
        this.answer = answer;
        resolve();
      });
    });
  }

  convertStringToNum() {
    this.answer = parseInt(this.answer, 10);
  }

  convertNumToArray() {
    this.answerArr = Array.from(String(this.answer), Number);
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

export default User;
