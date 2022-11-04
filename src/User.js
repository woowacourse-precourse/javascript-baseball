import MissionUtils from '@woowacourse/mission-utils';

class User {
  waitEnter() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', num => {
        resolve(num);
      });
    });
  }

  async getUserInput() {
    this.num = await this.waitEnter();
  }

  convertStringToNum() {
    this.num = parseInt(this.num, 10);
  }

  convertNumToArray() {
    this.numArr = Array.from(String(this.num), Number);
  }

  checkTruthy() {
    return Boolean(this.num);
  }

  checkType() {
    return typeof this.num === 'number';
  }

  checkRange() {
    return this.num >= 123 && this.num <= 987;
  }

  checkDuplication() {
    return this.numArr.every((num, i, numArr) => numArr.indexOf(num) === i);
  }

  checkUserInput() {
    return this.checkTruthy() && this.checkType() && this.checkRange() && this.checkDuplication();
  }
}

export default User;
