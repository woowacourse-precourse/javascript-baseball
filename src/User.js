const {Random, Console} = require("@woowacourse/mission-utils");

class User {
  constructor () {
    this.numbers = [];
  }

  getNumbers () {
    this.setNumbers();
    return this.numbers;
  }

  setNumbers () {
      Console.readLine('숫자를 입력해주세요 :', (input) => {
        this.numbers = input.split("").map(Number)
        Console.print(this.numbers)
      })
  }
}

module.exports = User;