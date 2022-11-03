import MissionUtils from '@woowacourse/mission-utils';

class User {
  constructor() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', number => {
      this.number = number;
    });
  }
}

export default User;
