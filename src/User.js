const { Console } = require("@woowacourse/mission-utils");
const userInputRegEx = /^[1-9]{3}$/;
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
  validateInput = (input) => {
    if (!userInputRegEx.test(input)) {
      throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
    }
    if (new Set(input.split("")).size > 3) {
      throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
    }
    return true;
  };
}
module.exports = {
  User,
};
