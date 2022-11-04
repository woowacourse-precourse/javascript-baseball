import MissionUtils from '@woowacourse/mission-utils';

class User {
  getter() {
    return [this.answer, this.answerArr];
  }

  enterAnswer() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
        this.answer = parseInt(answer, 10);
        resolve();
      });
    });
  }

  convertNumToArray() {
    this.answerArr = Array.from(String(this.answer), Number);
  }
}

export default User;
