import MissionUtils from '@woowacourse/mission-utils';

class User {
  message = {
    waitAnswer: '숫자를 입력해주세요 : ',
  };

  getter() {
    return [this.answer, this.answerArr];
  }

  enterAnswer() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(this.message.waitAnswer, answer => {
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
