const { Random, Console } = require("@woowacourse/mission-utils");

class User {
  receiveAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.answer = answer;
    });
  }
}

module.exports = User;
