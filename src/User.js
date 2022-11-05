const { Console } = require('@woowacourse/mission-utils');

class User {
  readInput() {
    return new Promise((resolve) => {
      Console.readLine('숫자를 입력해 주세요 : ', (string) => {
        this.input = Array.from(string, Number);
        this.checkInput();
        resolve();
      });
    });
  }

  checkInput() {
    const { input } = this;
    const inputSet = new Set(input);

    if (
      inputSet.size !== input.length
      || inputSet.size > 3
      || inputSet.has(NaN)
      || inputSet.has(0)
    ) {
      throw new Error('잘못된 값을 입력하셨습니다.');
    }
  }
}

module.exports = User;
