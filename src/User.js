const MissionUtils = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.userNumberArray = [];
  }
  getUserNumberFromInput() {
    let that = this;
    return new Promise(function (resolve, reject) {
      try {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
          that.userNumberArray = [
            ...input
              .toString()
              .split('')
              .map(i => +i),
          ];
          resolve();
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = User;
