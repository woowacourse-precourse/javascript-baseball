const { Console } = require("@woowacourse/mission-utils");
class User {
  constructor() {
    this.userInput = "";
  }
  getInput = () => {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.userInput = input;
      Console.close();
    });
  };
}
