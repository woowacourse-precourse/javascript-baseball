const MissionUtils = require("@woowacourse/mission-utils");

class Render {
  constructor() {}

  getUser() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요", (number) => {
        resolve(number);
      });
    });
  }
}
